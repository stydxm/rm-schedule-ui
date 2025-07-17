<script setup lang="ts">
import { MatchNode, Player } from "../types/schedule";
import axios, { AxiosResponse } from "axios";
import { RankListItem } from "../types/rank";
import { usePromotionStore } from "../stores/promotion";
import { computed, ref } from "vue";
import { RobotDisplay } from "../types/robot_data"

import * as echarts from 'echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { RadarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import MatchRecord from "./MatchRecord.vue";
import GroupMatchData from "./GroupMatchData.vue";
import CompleteFormRank from "./CompleteFormRank.vue";
import RobotDataTable from "./RobotDataTable.vue";

interface Props {
  zoneId: number,
  player: Player,
}

const props = defineProps<Props>()
if (!props.player || !props.player.team) {
  throw new Error('Player is required')
}

const promotionStore = usePromotionStore();

const rank = ref<RankListItem | null>(null)
const loading = ref(true)

axios({
  method: 'GET',
  url: '/api/rank',
  params: {
    season: promotionStore.season,
    school_name: props.player.team.collegeName,
  }
}).then((resp: AxiosResponse<RankListItem>) => {
  rank.value = resp.data
}).finally(() => {
  loading.value = false
})

const groupRank = computed(() => {
  for (const zone of promotionStore.groupRank.zones) {
    for (const group of zone.groups) {
      for (const players of group.groupPlayers) {
        if (players[1].itemValue['collegeName'] == props.player.team.collegeName) {
          return players
        }
      }
    }
  }
  return []
})

function convertToOrdinal(number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return number + "st";
  } else if (lastDigit === 2 && lastTwoDigits !== 12) {
    return number + "nd";
  } else if (lastDigit === 3 && lastTwoDigits !== 13) {
    return number + "rd";
  } else {
    return number + "th";
  }
}

const robotData = computed(() => {
  return promotionStore.robotData.zones.find((zone) => {
    return Number(zone.zoneId) == props.zoneId
  })?.teams.find((team) => {
    return team.collegeName == props.player.team.collegeName
  })
})

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  VisualMapComponent,
]);

const currentTeamDisplay = promotionStore.robotDisplayMap.get(props.player.team.collegeName) as RobotDisplay
// ECharts在控制台报的警告是一个一直存在的bug：https://github.com/apache/echarts/issues/17763
const option: echarts.EChartsOption = {
  title: {
    subtext: '取所有队伍的最大值为 100%',
    subtextStyle: {
      color: "white"
    }
  },
  legend: {
    type: 'scroll',
    bottom: "bottom",
    textStyle: {
      color: "white"
    }
  },
  tooltip: {
    trigger: 'item'
  },
  radar: {
    indicator: [
      { name: '英雄局均关键伤害', max: promotionStore.maxRobotDisplay.heroKeyDamage },
      { name: '工程局均兑换经济', max: promotionStore.maxRobotDisplay.engineerEco },
      { name: '步兵局均总伤害', max: promotionStore.maxRobotDisplay.standardDamage },
      { name: '无人机局均总伤害', max: promotionStore.maxRobotDisplay.aerialDamage },
      { name: '哨兵局均总伤害', max: promotionStore.maxRobotDisplay.sentryDamage },
      { name: '飞镖累计命中数', max: promotionStore.maxRobotDisplay.dartHit },
      { name: '雷达局均易伤时间', max: promotionStore.maxRobotDisplay.radarMarkDuration },
    ]
  },
  series: [
    {
      name: '机器人关键数据',
      type: 'radar',
      emphasis: {
        areaStyle: {}
      },
      data: [
        {
          value: [
            promotionStore.avgRobotDisplay.heroKeyDamage,
            promotionStore.avgRobotDisplay.engineerEco,
            promotionStore.avgRobotDisplay.standardDamage,
            promotionStore.avgRobotDisplay.aerialDamage,
            promotionStore.avgRobotDisplay.sentryDamage,
            promotionStore.avgRobotDisplay.dartHit,
            promotionStore.avgRobotDisplay.radarMarkDuration,
          ],
          name: '平均值'
        },
        {
          value: [
            currentTeamDisplay.heroKeyDamage,
            currentTeamDisplay.engineerEco,
            currentTeamDisplay.standardDamage,
            currentTeamDisplay.aerialDamage,
            currentTeamDisplay.sentryDamage,
            currentTeamDisplay.dartHit,
            currentTeamDisplay.radarMarkDuration,
          ],
          name: props.player.team.collegeName,
        }
      ]
    }
  ]
};
</script>

<template>
  <v-card
    v-if="props.player && props.player.team"
    class="pa-2 pt-4"
  >
    <v-card-title>
      <div class="container">
        <div class="left-column">
          <v-avatar size="100">
            <v-img
              :src="props.player.team.collegeLogo"
              color="white"
            ></v-img>
          </v-avatar>
        </div>

        <div class="right-column ml-4">
          <h3>{{ props.player.team.collegeName }}</h3>
          <h4>{{ props.player.team.name }}</h4>
          <h6 v-if="rank">RoboMaster 高校积分榜第 {{ rank.rankScoreItem.rank }} 名
            ({{ rank.rankScoreItem.score }})</h6>
        </div>
      </div>
    </v-card-title>

    <v-card-text class="mt-2">
      <div v-if="loading">
        <v-progress-linear indeterminate color="primary"></v-progress-linear>
      </div>

      <div v-else>
        <div v-if="rank">
          <v-row>
            <v-col md="6" cols="12">
              <MatchRecord :player="props.player"/>
            </v-col>

            <v-col v-if="groupRank.length > 0"
                   md="6" cols="12">
              <GroupMatchData group-rank="groupRank"/>
            </v-col>

            <v-col md="6" cols="12">
              <CompleteFormRank :rank="rank"/>
            </v-col>

            <v-col md="6" cols="12">
              <RobotDataTable :robot-data="robotData"/>
            </v-col>

            <v-col md="6" cols="12">
              <div>
                <v-chip color="info" variant="flat" label>
                  <h3>雷达图</h3>
                </v-chip>
                <v-chart class="chart" :option="option" autoresize/>
              </div>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <v-alert
            variant="tonal"
            color="error"
          >
            <v-icon left>mdi-alert</v-icon>
            未找到该队伍的信息
          </v-alert>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.chart {
  width: 100%;
  aspect-ratio: 1.2/1;
}

.container {
  display: flex;
  width: 100%; /* 确保容器宽度 */
}

.left-column {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: center;
}

.right-column {
  flex: 1; /* 占据剩余的空间 */
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

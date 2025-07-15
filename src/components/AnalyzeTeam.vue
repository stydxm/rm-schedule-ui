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

const width = ref(window.innerWidth)

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

const matchList = computed(() => {
  const ret: MatchNode[] = []
  for (const zone of promotionStore.schedule.data.event.zones.nodes) {
    zone.groupMatches.nodes.forEach((match) => {
      if (match.redSide.playerId == props.player.id) ret.push(match)
      else if (match.blueSide.playerId == props.player.id) ret.push(match)
    })
    zone.knockoutMatches.nodes.forEach((match) => {
      if (match.redSide.playerId == props.player.id) ret.push(match)
      else if (match.blueSide.playerId == props.player.id) ret.push(match)
    })
  }
  return ret
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
  }).teams.find((team) => {
    return team.collegeName == props.player.team.collegeName
  })
})

const RobotDataMap = ref({
  "Hero": {
    type: "英雄",
    dataFields: [
      { th: "局均42mm弹丸命中率(%)", td: "eaBigHitRate", },
      { th: "局均部署命中数", td: "eaSnipeCnt", },
      { th: "局均关键伤害", td: "gkDamage", },
      { th: "局均KDA", td: "eaKDA", },
    ]
  },
  "Infantry": {
    type: "步兵",
    dataFields: [
      { th: "局均17mm弹丸命中率(%)", td: "eaSmallHitRate", },
      { th: "局均总伤害", td: "eagHurt", },
      { th: "局均关键伤害", td: "gkDamage", },
      { th: "局均KDA", td: "eaKDA", },
    ]
  },
  "Sapper": {
    type: "工程",
    dataFields: [
      { th: "局均兑换难度", td: "avgMineDiff", },
      { th: "局均兑换时间", td: "avgMineTime", },
      { th: "局均兑换经济", td: "eaExchangeEcon", },
      { th: "局均KDA", td: "eaKDA", },
    ]
  },
  "Airplane": {
    type: "无人机",
    dataFields: [
      { th: "局均17mm弹丸命中率(%)", td: "eaSmallHitRate", },
      { th: "局均发弹量", td: "avgShootNum", },
      { th: "局均总伤害", td: "eagHurt", },
      { th: "局均关键伤害", td: "gkDamage", },
      { th: "局均KDA", td: "eaKDA", },
    ]
  },
  "Guard": {
    type: "哨兵",
    dataFields: [
      { th: "局均17mm弹丸命中率(%)", td: "eaSmallHitRate", },
      { th: "局均总伤害", td: "eagHurt", },
      { th: "局均关键伤害", td: "gkDamage", },
      { th: "局均KDA", td: "eaKDA", },
    ]
  },
  "Dart": {
    type: "飞镖",
    dataFields: [
      { th: "累计命中前哨站数", td: "etDartOutpostCnt", },
      { th: "累计命中基地固定目标数", td: "etDartFixedCnt", },
      { th: "累计命中基地随机固定目标数", td: "etDartRDFixCnt", },
      { th: "累计命中基地随机移动目标数", td: "etDartRDMoveCnt", },
      { th: "局均KDA", td: "eaKDA", },
    ]
  },
  "Radar": {
    type: "雷达",
    dataFields: [
      { th: "局均额外伤害", td: "eaRadarDebuffDmg", },
      { th: "局均易伤时间", td: "eaRadarMarkerTime", },
    ]
  }
})

function maxRobotData(type: string, field: string): number {
  return promotionStore.maxRobotData.find((n) => n.type === type)![field]
}

function progressColor(value: number): string {
  if (value >= 75) return "red";
  if (value >= 50) return "orange";
  if (value >= 25) return "blue";
  return "green";
}

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
              <div>
                <v-chip color="info" variant="flat" label>
                  <h3>比赛战绩</h3>
                </v-chip>

                <v-table class="mt-2">
                  <thead>
                  <tr>
                    <th class="text-left"><b>场次</b></th>
                    <th class="text-left"><b>红方</b></th>
                    <th class="text-left"><b>蓝方</b></th>
                    <th class="text-left"><b>比分</b></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="n in matchList">
                    <td>{{ n.orderNumber }}</td>
                    <td>{{ n.redSide.player?.team?.collegeName }}</td>
                    <td>{{ n.blueSide.player?.team?.collegeName }}</td>
                    <td>{{ n.redSideWinGameCount }}:{{ n.blueSideWinGameCount }}</td>
                  </tr>
                  </tbody>
                </v-table>
              </div>
            </v-col>

            <v-col v-if="groupRank.length > 0" md="6" cols="12">
              <div>
                <v-chip color="info" variant="flat" label>
                  <h3>区域赛小组赛排名 {{ groupRank[0].itemValue }}/16</h3>
                </v-chip>

                <v-table class="mt-2">
                  <thead>
                  <tr>
                    <th class="text-left"><b>项目名称</b></th>
                    <th class="text-left"><b>数值</b></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="n in groupRank.slice(2)">
                    <td>{{ n.itemName }}</td>
                    <td>{{ n.itemValue }}</td>
                  </tr>
                  </tbody>
                </v-table>
              </div>
            </v-col>

            <v-col md="6" cols="12">
              <div>
                <v-chip color="info" variant="flat" label>
                  <h3>完整形态考核排名 {{ rank.completeForm.rank }}/96</h3>
                </v-chip>
                <v-table class="mt-2">
                  <thead>
                  <tr>
                    <th class="text-left"><b>项目名称</b></th>
                    <th class="text-left"><b>数值</b></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>分数</td>
                    <td>{{ rank.completeForm.score }}</td>
                  </tr>
                  <tr>
                    <td>初始金币-项目文档</td>
                    <td v-if="promotionStore.season!==2024">{{ rank.completeForm.initialCoinDocument }}
                      ({{ rank.completeForm.levelDocument }})
                    </td>
                    <td v-else>{{ rank.completeForm.initialCoinDocument }}</td>
                  </tr>
                  <tr>
                    <td>初始金币-技术方案</td>
                    <td v-if="promotionStore.season!==2024">{{ rank.completeForm.initialCoinTechnology }}
                      ({{ rank.completeForm.levelTechnology }})
                    </td>
                    <td v-else>{{ rank.completeForm.initialCoinTechnology }}</td>
                  </tr>
                  <tr>
                    <td>总初始金币</td>
                    <td>{{ rank.completeForm.initialCoinTotal }}</td>
                  </tr>
                  </tbody>
                </v-table>
              </div>
            </v-col>

            <v-col md="6" cols="12">
              <div>
                <v-chip class="mb-2" color="info" variant="flat" label>
                  <h3>机器人数据</h3>
                </v-chip>

                <div v-for="robot in robotData.robots"
                     :key="robot.robotNumber">
                  <div v-if="RobotDataMap[robot.type]" class="mt-2">
                    <v-table density="compact">
                      <thead>
                      <tr>
                        <v-chip color="info" variant="tonal" label size="small">
                          <h3>{{ RobotDataMap[robot.type].type }}</h3>
                        </v-chip>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="field in RobotDataMap[robot.type].dataFields"
                          :key="field.td">
                        <td style="width: 35%"><span>{{ field.th }}</span></td>
                        <td style="width: 15%"><span>{{ robot[field.td] }}</span></td>
                        <td style="width: 50%">
                          <div v-if="width < 500">
                            <span v-if="!isNaN(robot[field.td] / maxRobotData(robot.type, field.td))">
                              {{ Math.ceil(robot[field.td] / maxRobotData(robot.type, field.td) * 100) }}% Max
                            </span>
                            <span v-else>-</span>
                          </div>
                          <v-progress-linear
                            v-else
                            :color="progressColor(robot[field.td] / maxRobotData(robot.type, field.td) * 100)"
                            height="20"
                            :model-value="robot[field.td] / maxRobotData(robot.type, field.td) * 100"
                            striped
                          >
                            <template v-slot:default="{ value }">
                              <strong v-if="!isNaN(value)">{{ Math.ceil(value) }}% Max</strong>
                            </template>
                          </v-progress-linear>
                        </td>
                      </tr>
                      </tbody>
                    </v-table>
                  </div>
                </div>
              </div>
            </v-col>

            <v-col md="6" cols="12">
              <div>
                <v-chip color="info" variant="flat" label>
                  <h3>机器人关键数据</h3>
                </v-chip>
                <h5><br>*取所有队伍的最大值为 100%</h5>
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

<script setup lang="ts">
import { MatchNode, Player } from "../types/schedule";
import axios, { AxiosResponse } from "axios";
import { RankListItem } from "../types/rank";
import { usePromotionStore } from "../stores/promotion";
import { computed, ref } from "vue";

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
</script>

<template>
  <v-card
    v-if="player && player.team"
    class="pa-2 pt-4"
  >
    <v-card-title>
      <div class="container">
        <div class="left-column">
          <v-avatar size="100">
            <v-img
              :src="player.team.collegeLogo"
              color="white"
            ></v-img>
          </v-avatar>
        </div>

        <div class="right-column ml-4">
          <h3>{{ player.team.collegeName }}</h3>
          <h4>{{ player.team.name }}</h4>
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
                    <td>{{ rank.completeForm.initialCoinDocument }} ({{ rank.completeForm.levelDocument }})</td>
                  </tr>
                  <tr>
                    <td>初始金币-技术方案</td>
                    <td>{{ rank.completeForm.initialCoinTechnology }} ({{ rank.completeForm.levelTechnology }})</td>
                  </tr>
                  <tr>
                    <td>总初始金币</td>
                    <td>{{ rank.completeForm.initialCoinTotal }}</td>
                  </tr>
                  </tbody>
                </v-table>
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

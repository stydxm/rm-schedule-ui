<script setup lang="ts">
import axios, { AxiosResponse } from "axios";
import { ref } from "vue";
import { Player } from "../types/schedule";
import { HistoryMatch, HistoryMatchResp } from "../types/history_match";

interface Props {
  redPlayer: Player,
  bluePlayer: Player,
}

const props = defineProps<Props>()

const matchList = ref<HistoryMatch[]>([])
axios({
  method: 'GET',
  url: '/api/history_match',
  params: {
    primary_college_name: props.bluePlayer.team?.collegeName,
    secondary_college_name: props.redPlayer.team?.collegeName,
  }
}).then((response: AxiosResponse<HistoryMatchResp>) => {
  matchList.value = response.data.hits;
}).catch((error) => {
  console.error("Error fetching match history:", error);
});
</script>

<template>
  <div>
    <v-chip color="info" variant="flat" label>
      <h3>历史战绩</h3>
    </v-chip>

    <v-table class="mt-2">
      <thead>
      <tr>
        <th class="text-left"><b>赛季</b></th>
        <th class="text-left"><b>赛区</b></th>
        <th class="text-left"><b>红方</b></th>
        <th class="text-left"><b>蓝方</b></th>
        <th class="text-left"><b>比分</b></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="match in matchList" :key="match.order">
        <td>{{ match.season }}</td>
        <td>{{ match.zone }}</td>
        <td :class="{ 'loser': match.redSideWinGameCount < match.blueSideWinGameCount }">
          {{ match.redCollegeName }}<br>{{ match.redTeamName }}
        </td>
        <td :class="{ 'loser': match.redSideWinGameCount > match.blueSideWinGameCount }">
          {{ match.blueCollegeName }}<br>{{ match.blueTeamName }}
        </td>
        <td>{{ match.redSideWinGameCount }}:{{ match.blueSideWinGameCount }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped lang="scss">
.loser {
  color: darkgrey;
}
</style>

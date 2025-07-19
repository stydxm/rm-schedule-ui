<script setup lang="ts">
import { computed } from "vue";
import { MatchNode, Player } from "../types/schedule";
import { usePromotionStore } from "../stores/promotion";

interface Props {
  player: Player,
}

const props = defineProps<Props>()
const promotionStore = usePromotionStore();

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
</script>

<template>
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
      <tr v-for="match in matchList" :key="match.id">
        <td>{{ match.orderNumber }}</td>
        <td :class="{ 'loser': match.redSideWinGameCount < match.blueSideWinGameCount }">
          {{ match.redSide.player?.team?.collegeName }}<br>{{ match.redSide.player?.team?.name }}
        </td>
        <td :class="{ 'loser': match.redSideWinGameCount > match.blueSideWinGameCount }">
          {{ match.blueSide.player?.team?.collegeName }}<br>{{ match.blueSide.player?.team?.name }}
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

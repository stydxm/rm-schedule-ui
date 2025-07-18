<script setup lang="ts">
import { MatchNode, Player } from "../types/schedule";
import { usePromotionStore } from "../stores/promotion";
import { useRobotDataStore } from "../stores/robot_data";
import { ref } from "vue";

interface Props {
  zoneId: number,
  match: MatchNode,
}

const props = defineProps<Props>()
const redPlayer = props.match.redSide.player
const bluePlayer = props.match.blueSide.player

if (!redPlayer) {
  throw new Error("Red player is required");
}
if (!bluePlayer) {
  throw new Error("Blue player is required");
}

const promotionStore = usePromotionStore();
const robotDataStore = useRobotDataStore();

const loading = ref(true)
</script>

<template>
  <v-card
    v-if="redPlayer?.team && bluePlayer?.team"
    class="pa-2 pt-4"
  >
  </v-card>
</template>

<style scoped lang="scss">

</style>

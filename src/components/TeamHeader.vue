<script setup lang="ts">
import { Player } from "../types/schedule";
import { RankListItem } from "../types/rank";

interface Props {
  player: Player,
  rank: RankListItem | null,
}

const props = defineProps<Props>()
</script>

<template>
  <div class="container">
    <div class="left-column">
      <v-avatar size="100">
        <v-img
          :src="props.player.team.collegeLogo"
          color="white"
        ></v-img>
      </v-avatar>
    </div>

    <div v-if="props.rank"
      class="right-column ml-4">
      <h3>{{ props.player.team.collegeName }}</h3>
      <h4>{{ props.player.team.name }}</h4>
      <h6 v-if="props.rank">RoboMaster 高校积分榜第 {{ props.rank.rankScoreItem.rank }} 名
        ({{ props.rank.rankScoreItem.score }})</h6>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

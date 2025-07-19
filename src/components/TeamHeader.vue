<script setup lang="ts">
import { Player } from "../types/schedule";
import { RankListItem } from "../types/rank";

interface Props {
  player: Player,
  rank: RankListItem | null,
  right?: boolean,
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="['container', { reverse: props.right }]">
    <div class="left-column">
      <v-avatar size="100">
        <v-img
          :src="props.player.team.collegeLogo"
          color="white"
        ></v-img>
      </v-avatar>
    </div>

    <div v-if="props.rank"
         class="right-column mx-4">
      <h3>{{ props.player.team.collegeName }}</h3>
      <h4>{{ props.player.team.name }}</h4>
      <h6 v-if="props.rank">RoboMaster 高校积分榜第 {{ props.rank.rankScoreItem.rank }} 名
        ({{ props.rank.rankScoreItem.score }})</h6>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-column {
  flex: 1; /* 占据剩余的空间 */
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.container {
  display: flex;
  width: 100%; /* 确保容器宽度 */
}

/* 当 right 为 true 时，反转左右布局 */
.reverse {
  flex-direction: row-reverse;
}

.reverse .right-column {
  margin-right: 4px; /* 对应原有的 ml-4 */
  align-items: end;
}

.left-column {
  display: flex;
  align-items: start; /* 垂直居中对齐 */
  justify-content: center;
}

</style>

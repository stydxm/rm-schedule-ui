<script setup lang="ts">
import { BilibiliEmbedRenderer } from "vue-bilibili-embed-renderer";
import { MatchNode } from "../types/schedule";
import { computed } from "vue";
import moment from "moment/moment";
import { useAppStore } from "../stores/app";
import { usePromotionStore } from "../stores/promotion";

interface Props {
  match: MatchNode
}

const props = defineProps<Props>();
const appStore = useAppStore()
const promotionStore = usePromotionStore();
const match = computed(() => props.match)

function matchTooltip(match: MatchNode): string {
  if (!match) return ""
  const time = moment.parseZone(match.planStartedAt).utcOffset(8)
  return `预计 ${time.format('M月D日 HH:mm')} 开始`
}

function openBilibiliSpace(uid: number) {
  window.open(`https://space.bilibili.com/${uid}`, '_blank')
}
</script>

<template>
  <v-card
    class="mx-auto"
    prepend-icon="mdi-sword-cross"
    width="320"
  >
    <template v-slot:title>
      <span class="font-weight-black">
        {{ matchTooltip(match) }}
      </span>
    </template>

    <template v-slot:subtitle>
      <span class="font-weight-black">
        {{ match.redSide.player?.team.collegeName }}
        vs
        {{ match.blueSide.player?.team.collegeName }}
      </span>
    </template>

    <BilibiliEmbedRenderer
      v-if="promotionStore.bilibiliReplay"
      width="320"
      height="180"
      :bvid="promotionStore.bilibiliReplay.bvid">
    </BilibiliEmbedRenderer>

    <v-list>
      <v-list-item
        @click="appStore.matchAnalysisDialog = true"
      >
        分析比赛{{ promotionStore.getCurrentZone().name }}第{{ match.orderNumber }}场
      </v-list-item>
      <v-list-item
        @click="appStore.analysisDialog = true"
      >
        分析队伍{{ promotionStore.selectedPlayer?.team?.collegeName }}
      </v-list-item>
      <v-list-item
        :disabled="!promotionStore.teamInfo || !promotionStore.teamInfo.bilibiliUid"
        @click="openBilibiliSpace(promotionStore.teamInfo?.bilibiliUid)"
      >
        前往战队 bilibili 账号
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped lang="scss">

</style>

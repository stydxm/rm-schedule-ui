<script setup lang="ts">
import { usePromotionStore } from "../stores/promotion";
import { RankListItem } from "../types/rank";
import { computed } from "vue";

interface Props {
  rank: RankListItem | null,
}

const props = defineProps<Props>()
const promotionStore = usePromotionStore();

const rank = computed(() => props.rank)
</script>

<template>
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
</template>

<style scoped lang="scss">

</style>

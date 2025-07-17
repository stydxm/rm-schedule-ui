<script setup lang="ts">
import { GroupPlayer } from "../types/group_rank_info";

interface Props {
  groupRank: GroupPlayer[],
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <v-chip color="info" variant="flat" label>
      <h3>区域赛小组赛排名 {{ props.groupRank[0].itemValue }}/16</h3>
    </v-chip>

    <v-table class="mt-2">
      <thead>
      <tr>
        <th class="text-left"><b>项目名称</b></th>
        <th class="text-left"><b>数值</b></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="n in props.groupRank.slice(2)"
          :key="n.itemName">
        <td>{{ n.itemName }}</td>
        <td>{{ n.itemValue }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped lang="scss">

</style>

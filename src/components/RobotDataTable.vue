<script setup lang="ts">

import { computed, ref } from "vue";
import { Team } from "../types/robot_data";
import { usePromotionStore } from "../stores/promotion";
import { useRobotDataStore } from "../stores/robot_data";

interface Props {
  robotData: Team
}

const props = defineProps<Props>()
const robotDataStore = useRobotDataStore();
const robotData = computed(() => props.robotData)

const width = ref(window.innerWidth)

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
  return robotDataStore.maxRobotData.find((n) => n.type === type)![field]
}

function progressColor(value: number): string {
  if (value >= 75) return "red";
  if (value >= 50) return "orange";
  if (value >= 25) return "blue";
  return "green";
}
</script>

<template>
  <div v-if="robotData">
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
</template>

<style scoped lang="scss">

</style>

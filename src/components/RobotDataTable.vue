<script setup lang="ts">

import { computed, Ref, ref } from "vue";
import { Team } from "../types/robot_data";
import { useRobotDataStore } from "../stores/robot_data";
import RobotDataProgress from "./RobotDataProgress.vue";

interface Props {
  robotDataLeft: Team
  robotDataRight?: Team
}

const props = defineProps<Props>()
const robotDataStore = useRobotDataStore();
const robotDataLeft = computed(() => props.robotDataLeft)
const robotDataRight = computed(() => props.robotDataRight)

interface DataField {
  th: string; // 表头
  td: string; // 数据字段
  tdShow: string; // 显示字段
}

interface RobotData {
  type: string; // 机器人类型
  dataFields: DataField[]; // 数据字段列表
}

const RobotDataMap: Ref<{ [key: string]: RobotData }> = ref({
  "Hero": {
    type: "英雄",
    dataFields: [
      { th: "局均42mm弹丸命中率(%)", td: "eaBigHitRate", tdShow: "eaBigHitRate" },
      { th: "局均部署命中数", td: "eaSnipeCnt", tdShow: "eaSnipeCnt" },
      { th: "局均关键伤害", td: "gkDamage", tdShow: "gkDamage" },
      { th: "局均KDA", td: "_eaKDAScore", tdShow: "eaKDA" },
    ]
  },
  "Infantry": {
    type: "步兵",
    dataFields: [
      { th: "局均17mm弹丸命中率(%)", td: "eaSmallHitRate", tdShow: "eaSmallHitRate" },
      { th: "局均总伤害", td: "eagHurt", tdShow: "eagHurt" },
      { th: "局均关键伤害", td: "gkDamage", tdShow: "gkDamage" },
      { th: "大能量机关平均激活环数", td: "matchLargeEnergyActRoundsAvg", tdShow: "matchLargeEnergyActRoundsAvg" },
      { th: "局均KDA", td: "_eaKDAScore", tdShow: "eaKDA" },
    ]
  },
  "Sapper": {
    type: "工程",
    dataFields: [
      { th: "局均兑换难度", td: "avgMineDiff", tdShow: "avgMineDiff" },
      { th: "局均兑换时间", td: "avgMineTime", tdShow: "avgMineTime" },
      { th: "局均兑换经济", td: "eaExchangeEcon", tdShow: "eaExchangeEcon" },
      { th: "局均KDA", td: "_eaKDAScore", tdShow: "eaKDA" },
    ]
  },
  "Airplane": {
    type: "无人机",
    dataFields: [
      { th: "局均17mm弹丸命中率(%)", td: "eaSmallHitRate", tdShow: "eaSmallHitRate" },
      { th: "局均发弹量", td: "avgShootNum", tdShow: "avgShootNum" },
      { th: "局均总伤害", td: "eagHurt", tdShow: "eagHurt" },
      { th: "局均关键伤害", td: "gkDamage", tdShow: "gkDamage" },
      { th: "局均KDA", td: "_eaKDAScore", tdShow: "eaKDA" },
    ]
  },
  "Guard": {
    type: "哨兵",
    dataFields: [
      { th: "局均17mm弹丸命中率(%)", td: "eaSmallHitRate", tdShow: "eaSmallHitRate" },
      { th: "局均总伤害", td: "eagHurt", tdShow: "eagHurt" },
      { th: "局均关键伤害", td: "gkDamage", tdShow: "gkDamage" },
      { th: "局均KDA", td: "_eaKDAScore", tdShow: "eaKDA" },
    ]
  },
  "Dart": {
    type: "飞镖",
    dataFields: [
      { th: "累计命中前哨站数", td: "etDartOutpostCnt", tdShow: "etDartOutpostCnt" },
      { th: "累计命中基地固定目标数", td: "etDartFixedCnt", tdShow: "etDartFixedCnt" },
      { th: "累计命中基地随机固定目标数", td: "etDartRDFixCnt", tdShow: "etDartRDFixCnt" },
      { th: "累计命中基地随机移动目标数", td: "etDartRDMoveCnt", tdShow: "etDartRDMoveCnt" },
      { th: "局均KDA", td: "_eaKDAScore", tdShow: "eaKDA" },
    ]
  },
  "Radar": {
    type: "雷达",
    dataFields: [
      { th: "局均额外伤害", td: "eaRadarDebuffDmg", tdShow: "eaRadarDebuffDmg" },
      { th: "局均易伤时间", td: "eaRadarMarkerTime", tdShow: "eaRadarMarkerTime" },
    ]
  }
})

function maxRobotData(type: string, field: string): number {
  return robotDataStore.maxRobotData.find((n) => n.type === type)![field]
}

const nameWidth = computed(() => robotDataRight.value ? 'width: 16%' : 'width: 35%')
const valueWidth = computed(() => robotDataRight.value ? 'width: 12%' : 'width: 15%')
const progressWidth = computed(() => robotDataRight.value ? 'width: 30%' : 'width: 50%')
</script>

<template>
  <div v-if="robotDataLeft">
    <v-chip class="mb-2" color="info" variant="flat" label>
      <h3>机器人数据</h3>
    </v-chip>

    <div v-for="(robotLeft, index) in robotDataLeft.robots"
         :key="robotLeft.robotNumber">
      <div v-if="RobotDataMap[robotLeft.type]" class="mt-2">
        <v-table density="compact">
          <thead>
          <tr>
            <v-chip color="info" variant="tonal" label size="small">
              <h3>{{ RobotDataMap[robotLeft.type].type }}</h3>
            </v-chip>
          </tr>
          </thead>
          <tbody>
          <tr v-for="field in RobotDataMap[robotLeft.type].dataFields"
              :key="field.td">
            <td :style="nameWidth"><span>{{ field.th }}</span></td>
            <td :style="valueWidth"><span>{{ robotLeft[field.tdShow] }}</span></td>
            <td :style="progressWidth">
              <RobotDataProgress
                :value="robotLeft[field.td]"
                :max-value="maxRobotData(robotLeft.type, field.td)"
                :disabled="robotDataRight ? robotLeft[field.td] < robotDataRight.robots[index][field.td] : false"
              />
            </td>
            <td v-if="robotDataRight" :style="progressWidth">
              <RobotDataProgress
                :value="robotDataRight.robots[index][field.td]"
                :max-value="maxRobotData(robotLeft.type, field.td)"
                :disabled="robotDataRight.robots[index][field.td] < robotLeft[field.td]"
              />
            </td>
            <td v-if="robotDataRight" :style="valueWidth">
              <span>{{ robotDataRight.robots[index][field.tdShow] }}</span>
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

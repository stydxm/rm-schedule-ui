<script setup lang="ts">
import VChart from "vue-echarts";
import { RobotDisplay } from "../types/robot_data";
import * as echarts from "echarts";
import { Player } from "../types/schedule";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { RadarChart } from "echarts/charts";
import { LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent } from "echarts/components";
import { useRobotDataStore } from "../stores/robot_data";

interface Props {
  players: Player[],
}

const props = defineProps<Props>()
const robotDataStore = useRobotDataStore();

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  VisualMapComponent,
]);

const currentRobotDisplays = [] as RobotDisplay[]
const data = [
  {
    value: [
      robotDataStore.avgRobotDisplay.heroKeyDamage,
      robotDataStore.avgRobotDisplay.engineerEco,
      robotDataStore.avgRobotDisplay.standardDamage,
      robotDataStore.avgRobotDisplay.aerialDamage,
      robotDataStore.avgRobotDisplay.sentryDamage,
      robotDataStore.avgRobotDisplay.dartWeightedScore,
      robotDataStore.avgRobotDisplay.radarMarkDuration,
    ],
    name: '平均值'
  },
]

props.players.forEach((player) => {
  currentRobotDisplays.push(robotDataStore.robotDisplayMap.get(player.team.collegeName))
  data.push({
    value: [
      currentRobotDisplays[currentRobotDisplays.length - 1].heroKeyDamage,
      currentRobotDisplays[currentRobotDisplays.length - 1].engineerEco,
      currentRobotDisplays[currentRobotDisplays.length - 1].standardDamage,
      currentRobotDisplays[currentRobotDisplays.length - 1].aerialDamage,
      currentRobotDisplays[currentRobotDisplays.length - 1].sentryDamage,
      currentRobotDisplays[currentRobotDisplays.length - 1].dartWeightedScore,
      currentRobotDisplays[currentRobotDisplays.length - 1].radarMarkDuration,
    ],
    name: player.team.collegeName,
  });
})

// ECharts在控制台报的警告是一个一直存在的bug：https://github.com/apache/echarts/issues/17763
const option: echarts.EChartsOption = {
  title: {
    subtext: '* 取所有队伍的最大值为 100%\n' +
      '** 飞镖加权命中分数 = 1*前哨站数 + 5*基地固定 + 10*基地随机固定 + 25*基地随机移动',
    subtextStyle: {
      color: "white"
    }
  },
  legend: {
    type: 'scroll',
    bottom: "bottom",
    textStyle: {
      color: "white"
    }
  },
  tooltip: {
    trigger: 'item'
  },
  radar: {
    indicator: [
      { name: '英雄局均关键伤害', max: robotDataStore.maxRobotDisplay.heroKeyDamage },
      { name: '工程局均兑换经济', max: robotDataStore.maxRobotDisplay.engineerEco },
      { name: '步兵局均总伤害', max: robotDataStore.maxRobotDisplay.standardDamage },
      { name: '无人机局均总伤害', max: robotDataStore.maxRobotDisplay.aerialDamage },
      { name: '哨兵局均总伤害', max: robotDataStore.maxRobotDisplay.sentryDamage },
      { name: '飞镖加权命中分数', max: robotDataStore.maxRobotDisplay.dartWeightedScore },
      { name: '雷达局均易伤时间', max: robotDataStore.maxRobotDisplay.radarMarkDuration },
    ]
  },
  series: [
    {
      name: '机器人关键数据',
      type: 'radar',
      emphasis: {
        areaStyle: {}
      },
      data: data,
    }
  ]
};
</script>

<template>
  <div>
    <v-chip color="info" variant="flat" label>
      <h3>雷达图</h3>
    </v-chip>
    <v-chart class="chart" :option="option" autoresize/>
  </div>
</template>

<style scoped lang="scss">
.chart {
  width: 100%;
  aspect-ratio: 1.2/1;
}
</style>

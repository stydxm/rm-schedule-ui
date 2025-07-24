<script setup lang="ts">
import VChart from "vue-echarts";
import { RobotDisplay } from "../types/robot_data";
import * as echarts from "echarts";
import { Player } from "../types/schedule";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { RadarChart } from "echarts/charts";
import { Dictionary } from "echarts/types/src/util/types.js";
import { LegendComponent, TitleComponent, TooltipComponent, VisualMapComponent } from "echarts/components";
import { useRobotDataStore } from "../stores/robot_data";
import { RadarSeriesDataItemOption } from "echarts/types/src/chart/radar/RadarSeries";

interface Props {
  players: Player[],
  colors: string[],
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

const plotData: RadarSeriesDataItemOption[] = []
const selectedLegends: Dictionary<boolean> = {}
const addItem = (displayData: RobotDisplay, name: string, color: string, itemOpacity?: number, lineOpacity?: number, areaOpacity?: number) => {
  if (itemOpacity === undefined) itemOpacity = 1.0
  if (lineOpacity === undefined) lineOpacity = 1.0
  if (areaOpacity === undefined) areaOpacity = 0.2
  plotData.push({
    value: [
      displayData.heroKeyDamage,
      displayData.engineerEco,
      displayData.standardDamage,
      displayData.aerialDamage,
      displayData.sentryDamage,
      displayData.dartWeightedScore,
      displayData.radarMarkDuration
    ],
    name: name,
    itemStyle: {
      color: color,
      opacity: itemOpacity,
    },
    lineStyle: {
      color: color,
      opacity: lineOpacity,
    },
    areaStyle: {
      color: color,
      opacity: areaOpacity,
    }
  })
}

const addTeam = (player: Player, color: string) => {
  let singleTeam = true
  if (props.players.length === 1) singleTeam = false
  if (player.team === undefined) return

  interface Stage {
    name: string,
    data: Map<string, RobotDisplay>
  }

  const stages: Stage[] = [{
    name: "区域赛",
    data: robotDataStore.robotDisplayMapRegional
  }, {
    name: "复活赛",
    data: robotDataStore.robotDisplayMapRepechage
  }, {
    name: "全国赛",
    data: robotDataStore.robotDisplayMapFinals
  }]
  const displayName = (stage: Stage) => singleTeam ? player.team!.collegeName + stage.name : stage.name
  stages.forEach(stage => {
    const currentTeamDisplays = stage.data.get(player.team!.collegeName)
    if (currentTeamDisplays !== undefined) {
      addItem(
        currentTeamDisplays,
        displayName(stage),
        color
      )
      // 如果该队参与了多个赛事阶段，仅显示最后一个
      for (const i of stages)
        if (selectedLegends[displayName(i)] !== undefined)
          selectedLegends[displayName(i)] = false
      selectedLegends[displayName(stage)] = true
    }
  })
}

addItem(
  robotDataStore.avgRobotDisplay,
  '平均值',
  'white'
)
selectedLegends["平均值"] = true

props.players.forEach((player, index) => {
  addTeam(player, props.colors[index % props.colors.length])
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
    },
    selected: selectedLegends
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
  series: {
    name: '机器人关键数据',
    type: 'radar',
    emphasis: {
      areaStyle: {}
    },
    data: plotData,
  }
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

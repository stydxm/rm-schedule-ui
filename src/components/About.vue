<script setup lang="ts">
import { useAppStore } from "../stores/app";

const appStore = useAppStore()

const items = [
  {
    id: 1,
    color: 'grey-lighten-2',
    title: '2024年5月14日',
    text: '宣传提出了瑞士轮可视化的构想，研发和宣传决定次日开始制作。',
  },
  {
    id: 2,
    color: 'grey-lighten-2',
    title: '2024年5月15日',
    text: '研发完成了初版软件并与宣传美化了UI，宣传设计了推文并发布。',
  },
  {
    id: 3,
    color: 'grey-lighten-2',
    title: '2024年5月18日',
    text: '研发前往苏州观赛时，RM组委会人员表达了对该软件的认可。双方“一拍即合”决定共同支持该软件。',
  },
  {
    id: 4,
    color: 'grey-lighten-2',
    title: '2024年5月21日',
    text: '研发继续该软件的迭代，增加了功能同时美化了UI. 期间RM组委会提出了宝贵建议并提供宣发支持。',
  },
  {
    id: 5,
    color: 'grey-lighten-2',
    title: '2024年5月22日',
    text: '中部区域赛启动，祝愿该软件能够帮助更多的队伍提高比赛效率，祝愿各个队伍取得好成绩。',
  },
  {
    id: 6,
    color: 'grey-lighten-2',
    title: '2024年7月13日',
    text: '针对 2024 赛季复活赛&全国赛的适配开始，RM Schedule 开启新征程。',
  },
  {
    id: 7,
    color: 'grey-lighten-2',
    title: '2024年8月13日',
    text: '2024 赛季冠军争夺战结束，RM Schedule 完成了本赛季的使命。感谢所有支持该软件的人。',
  },
  {
    id: 8,
    color: 'grey-lighten-2',
    title: '2024年9月19日',
    text: 'RM Schedule 在 GitHub 正式开源。',
  },
  {
    id: 9,
    color: 'grey-lighten-2',
    title: '2025年5月10日',
    text: 'RM Schedule 完成对 2025 赛季区域赛的适配。',
  },
]
</script>

<template>
  <v-dialog max-width="480" v-model="appStore.aboutDialog" :scrollable="true">
    <v-card variant="elevated">
      <v-img
        class="text-white py-2"
        height="240"
        src="@/assets/banner2.jpg"
        cover
      >
        <v-card-title><h3>关于 RM Schedule</h3></v-card-title>
        <v-card-subtitle>华南理工大学华南虎战队出品</v-card-subtitle>
      </v-img>

      <v-card-text class="text-center">
        <h3 class="mt-2">— 研发 —</h3>
        <p>22-24赛季 软件开发组 常霆钰</p>
        <p>浙江理工大学钱塘蛟 潘任周</p>
        <h3 class="mt-4">— 宣传 —</h3>
        <p>22-24赛季 宣传运营组 杨卓石</p>
        <h3 class="mt-4">— 特别鸣谢 —</h3>
        <p>RoboMaster 组委会</p>
        <p>如有更多软件 idea，可以搜索微信号 <b>rmfans666</b> 联系 RoboMaster 组委会</p>
        <h3 class="mt-4">— 数据源 —</h3>
        <p>各战队 bilibli 官方账号 @風雅荷</p>
        <p>2015-2024 赛季历史赛果 @法老</p>

        <div class="mt-6">
          <v-img src="@/assets/qr-code2.png"></v-img>
        </div>

        <v-expansion-panels class="my-4 text-start" variant="popout">
          <v-expansion-panel
            v-for="item in items"
            :key="item.id"
            :dot-color="item.color"
            :title="item.title"
            :text="item.text"
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="关闭"
          @click="appStore.aboutDialog = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>

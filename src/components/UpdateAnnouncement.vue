<script setup lang="ts">

import { useAppStore } from "../stores/app";
import { UpdateVersionCode, UpdateVersionCodeKey } from "../constant/common";

const appStore = useAppStore()

const updateList = [
  {
    title: "赛程适配",
    content: "现已完成 2025 赛季复活赛、全国赛全阶段赛程适配，实时同步最新对战信息。",
  },
  {
    title: "B 站联动",
    content: "支持小窗快速回看 B 站视频或跳转原视频，支持一键跳转战队 B 站主页。",
  },
  {
    title: "战队分析",
    content: "新增机器人关键数据面板、雷达图面板，同步对比全局最强战队，优势与差距一目了然。",
  },
  {
    title: "比赛分析",
    content: "支持对比红蓝双方的雷达图和机器人关键数据，亦可查看历史交手记录。",
  }
]

function onNotRemindMeRecently() {
  appStore.updateAnnouncementDialog = false
  localStorage.setItem(UpdateVersionCodeKey, UpdateVersionCode.toString())
}

function onOpenUpdateAnnouncement() {
  window.open("https://mp.weixin.qq.com/s/rLSAF9DuE4GUPKvW90DyZQ?click_id=17")
  appStore.updateAnnouncementDialog = false
  localStorage.setItem(UpdateVersionCodeKey, UpdateVersionCode.toString())
}
</script>

<template>
  <v-dialog
    v-model="appStore.updateAnnouncementDialog"
    width="auto"
  >
    <v-card
      max-width="400"
      prepend-icon="mdi-update"
      title="更新公告 2025-07-22"
    >
      <v-card-text>
        我们发布了全新的版本，包含众多实用性功能和错误修复，以下是本次更新的主要内容：
        <v-list lines="two">
          <v-list-item
            v-for="(item, index) in updateList"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          class="ma-2"
          variant="outlined"
          text="近期不提醒"
          @click="onNotRemindMeRecently"
        ></v-btn>
        <v-btn
          class="ma-2"
          variant="outlined"
          text="查看图文公告"
          @click="onOpenUpdateAnnouncement"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<style scoped lang=" scss
        ">

</style>

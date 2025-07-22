<script setup lang="ts">

import { useAppStore } from "../stores/app";

const appStore = useAppStore()

function onNotRemindMeRecently() {
  appStore.updateAnnouncementDialog = false
}

function onOpenUpdateAnnouncement() {
  appStore.updateAnnouncementDialog = false
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
      title="更新公告"
    >
      <v-card-text>
        我们已经发布了新的更新公告，点击下面的按钮查看详情。
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="近期不提醒"
          @click="onNotRemindMeRecently"
        ></v-btn>
        <v-btn
          text="查看公告"
          @click="onOpenUpdateAnnouncement"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<style scoped lang=" scss
        ">

</style>

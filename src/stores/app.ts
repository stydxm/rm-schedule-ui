import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UpdateVersionCode, UpdateVersionCodeKey } from "../constant/common";

export const useAppStore = defineStore('app', {
  state: () => ({
    analysisDialog: ref(false),
    matchAnalysisDialog: ref(false),
    aboutDialog: ref(false),
    searchDialog: ref(false),
    commentDialog: ref(false),
    updateAnnouncementDialog: ref(false),
  }),
  actions: {
    initStore() {
      const updateVersion = localStorage.getItem(UpdateVersionCodeKey)
      if (!updateVersion || parseInt(updateVersion) < UpdateVersionCode) {
        this.updateAnnouncementDialog = true
      }
    }
  }
})

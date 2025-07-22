import { defineStore } from 'pinia'
import { ref } from 'vue'

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
      this.updateAnnouncementDialog = true
    }
  }
})

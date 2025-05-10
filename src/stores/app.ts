import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useAppStore = defineStore('app', {
  state: () => ({
    analysisDialog: ref(false),
    aboutDialog: ref(false),
    searchDialog: ref(false),
    commentDialog: ref(false),
  }),
})

<template>
  <v-app>
    <v-main>
      <UpdateAnnouncement/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useAppStore } from "./stores/app";
import UpdateAnnouncement from "./components/UpdateAnnouncement.vue";

const appStore = useAppStore()
appStore.initStore()
</script>

<style lang="scss">
#app {
  font-family: Noto Sans SC, sans-serif;
  font-style: normal;
  font-weight: 400;
}
</style>


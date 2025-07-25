<script setup lang="ts">
import { useAppStore } from "../stores/app";
import MatchGraph from "./MatchGraph.vue";
import { computed, watch, ref } from "vue";
import { usePromotionStore } from "../stores/promotion";
import AnalyzeTeam from "./AnalyzeTeam.vue";
import { useRoute, useRouter } from "vue-router";
import { DefaultZoneMap, SeasonList, ZoneMap } from "../constant/zone";
import AnalyzeMatch from "./AnalyzeMatch.vue";

const route = useRoute()
const router = useRouter()

const liveMode = ref(Boolean(route.query.live == "1"))
const predict = ref(Boolean(route.query.predict == "1"))
const selectedGroup = ref(Number([route.query.group || 0]))
const appStore = useAppStore()
const promotionStore = usePromotionStore();

const zoneId = computed(() => promotionStore.zoneId)
promotionStore.season = Number(route.params.season)
promotionStore.zoneId = Number(route.params.zoneId)
const season = computed(() => promotionStore.season)
const zone = computed(() => ZoneMap[season.value].find((zone) => zone.id == zoneId.value))

// 如果 Season 不存在，则自动选择最后一个可用的 Season
if (!Object.keys(ZoneMap).includes(String(promotionStore.season))) {
  promotionStore.season = Number(Object.keys(ZoneMap).slice(-1)[0])
  promotionStore.zoneId = DefaultZoneMap[promotionStore.season]
  updateQuery()
}
// 如果 ZoneId 不存在，则自动选择默认的 ZoneId
if (!ZoneMap[promotionStore.season].find((zone) => zone.id == zoneId.value)) {
  promotionStore.zoneId = DefaultZoneMap[promotionStore.season]
  updateQuery()
}

function updateQuery() {
  // 如果选中的组不存在，则重置为第一个组
  if (!zone.value?.parts[selectedGroup.value]) {
    selectedGroup.value = 0
  }
  router.push({ path: `/${promotionStore.season}/${zoneId.value}`, query: { group: selectedGroup.value } })
}

function updateHref(newSeason: number) {
  window.location.href = `/${newSeason}`
}

watch(zoneId, updateQuery)
watch(selectedGroup, updateQuery)

function badgeTab(zoneId: number): boolean {
  if (!promotionStore.selectedPlayer) return false
  const zone = promotionStore.getZone(zoneId)
  if (!zone) return false
  for (let group of zone.groups.nodes) {
    for (let player of group.players.nodes) {
      if (promotionStore.selectedPlayer.id == player.id) return true
    }
  }
  return false
}

const width = computed(() => {
  return window.innerWidth
})

const MenuItems = ref(
  [
    {
      title: '分析队伍',
      icon: 'mdi-google-analytics',
      disabled: () => !promotionStore.selectedPlayer,
      action: () => {
        appStore.analysisDialog = true
      },
    },
    {
      title: '查看注释',
      icon: 'mdi-comment-text',
      disabled: () => false,
      action: () => {
        appStore.commentDialog = true
      },
    },
    {
      title: '更新公告',
      icon: 'mdi-update',
      disabled: () => false,
      action: () => {
        appStore.updateAnnouncementDialog = true
      },
    },
    {
      title: '关于软件',
      icon: 'mdi-information',
      disabled: () => false,
      action: () => {
        appStore.aboutDialog = true
      },
    },
  ]
)
</script>

<template>
  <div class="my-font">
    <img
      class="background-image"
      :style="{
        opacity: promotionStore.backgroundImageOpacity,
      }"
      :src="promotionStore.backgroundImage"
      alt=""/>

    <SearchPlayer :zone-id="zoneId"/>

    <div class="container">
      <div class="content">
        <div v-if="!liveMode"
             class="floating-container glass-sheet">
          <v-tabs
            class="row bg-transparent"
            height="55px"
            v-model="promotionStore.zoneId"
          >
            <v-select
              label="Season"
              max-width="120px"
              variant="filled"
              :items="SeasonList"
              v-model="promotionStore.season"
              @update:model-value="(newSeason: number) => updateHref(newSeason)"
            ></v-select>
            <v-select
              label="Zone"
              max-width="260px"
              variant="filled"
              :item-props="true"
              item-value="id"
              item-title="name"
              :disable="(item) => !item.disabled"
              :items="ZoneMap[promotionStore.season]"
              v-model="promotionStore.zoneId"
              @update:model-value="updateQuery"
            ></v-select>
            <v-spacer/>

            <v-switch
              v-if="predict"
              color="orange"
              class="ml-2"
              label="预测"
              v-model="promotionStore.suggestionEnabled"
            ></v-switch>

            <div class="text-right ml-4 mr-2 mt-1">
              <span v-if="width >= 800">
                RM Schedule
              </span>

              <v-btn
                class="mx-1"
                variant="flat"
                color="transparent"
                icon="mdi-magnify"
                @click="appStore.searchDialog = true"
              >
              </v-btn>

              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    variant="flat"
                    color="transparent"
                    icon="mdi-more"
                    v-bind="props"
                  ></v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in MenuItems"
                    :key="index"
                    :value="index"
                    :prepend-icon="item.icon"
                    :title="item.title"
                    :disabled="item.disabled()"
                    @click="item.action"
                  >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-tabs>

          <v-sheet class="mx-auto text-center bg-transparent">
            <v-slide-group
              class="ml-2"
              v-model="selectedGroup"
              mandatory="force"
            >
              <v-slide-group-item
                v-for="n in zone.parts.map(p => p.name)"
                :key="n"
                v-slot="{ isSelected, toggle }"
              >
                <v-btn
                  :color="isSelected ? 'primary' : undefined"
                  class="mx-1 my-2"
                  rounded
                  variant="outlined"
                  size="small"
                  @click="toggle">
                  {{ n }}
                </v-btn>
              </v-slide-group-item>

              <v-spacer/>

              <div class="text-right">
              </div>
            </v-slide-group>
          </v-sheet>
        </div>

        <div
          v-for="zone in ZoneMap[promotionStore.season]"
          :key="zone.id"
        >
          <v-carousel
            v-if="zoneId == zone.id"
            height="100vh - 100px"
            :disabled="true"
            hide-delimiters
            :show-arrows="false"
            v-model="selectedGroup"
          >
            <v-carousel-item
              v-for="part in zone.parts"
              :key="part.name"
            >
              <MatchGraph
                :zone-id="zoneId"
                :type="part.type"
                :group="part.group"
                :json-data="part.jsonData"
                :round-order="part.roundOrder"
                :extra-title-data="part.extraTitleData"
                :extra-image-data="part.extraImageData"
              ></MatchGraph>
            </v-carousel-item>
          </v-carousel>
        </div>

        <v-bottom-sheet v-model="appStore.analysisDialog">
          <AnalyzeTeam
            :zone-id="zoneId"
            :player="promotionStore.selectedPlayer"
          ></AnalyzeTeam>
        </v-bottom-sheet>

        <v-bottom-sheet v-model="appStore.matchAnalysisDialog">
          <AnalyzeMatch
            :zone-id="zoneId"
            :match="promotionStore.selectedMatch"
          ></AnalyzeMatch>
        </v-bottom-sheet>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh; /* 使容器的高度与视口高度一致 */
  overflow: hidden;
}

.background-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  object-fit: cover;
}

.content {
  position: relative;
  z-index: 3;
}

.container2 {
  display: flex; /* 使用Flexbox来布局子元素 */
  flex-wrap: wrap; /* 允许子元素换行 */
}

.row {
  display: flex; /* 每行也使用Flexbox布局 */
  flex-basis: 100%; /* 每行占满容器宽度 */
}

.col {
  flex: 1; /* 列占用可用空间 */
  align-content: center;
}

.my-font {
  font-family: 'MyFont', sans-serif;
}

.glass-sheet {
  background-color: rgba(255, 255, 255, 0.05); /* 半透明背景 */
  backdrop-filter: blur(5px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(5px); /* 兼容 Safari */
}

.floating-container {
  position: absolute; /* 绝对定位 */
  z-index: 4; /* 确保在 v-carousel 上方 */
  width: 100%; /* 占满宽度 */
}

.v-carousel {
  position: relative; /* 确保 v-carousel 作为定位参考 */
}
</style>

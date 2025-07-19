<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  value: any,
  maxValue: any,
  disabled?: boolean,
}

const props = defineProps<Props>()
const Percentage = computed(() => {
  if (typeof props.maxValue === "number") {
    return props.value / props.maxValue * 100;
  } else {
    return 0;
  }
})
const Width = ref(window.innerWidth)

function progressColor(value: number): string {
  if (props.disabled) return "grey";
  if (value >= 75) return "red";
  if (value >= 50) return "orange";
  if (value >= 25) return "blue";
  return "green";
}
</script>

<template>
  <div v-if="Width < 500">
    <span v-if="maxValue != 0">
      {{ Math.ceil(Percentage) }}% Max
    </span>
    <span v-else>-</span>
  </div>
  <v-progress-linear
    v-else
    :color="progressColor(Percentage)"
    height="20"
    :model-value="Percentage"
    :striped="!props.disabled"
  >
    <template v-slot:default="{ value }">
      <strong v-if="!isNaN(value)">{{ Math.ceil(value) }}% Max</strong>
    </template>
  </v-progress-linear>
</template>

<style scoped lang="scss">

</style>

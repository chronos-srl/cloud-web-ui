<script setup lang="ts">
export interface Cip {
  value: string
  label: string
}

defineProps<{
  cips: Cip[]
}>()
const model = defineModel<string>()
const emits = defineEmits(['change'])

function updateModel(value: string) {
  model.value = value
  emits('change', value)
}
</script>

<template>
  <div role="radiogroup">
    <button v-for="tab of cips" :key="tab.value"
            role="radio"
            @click="updateModel(tab.value)"
            :aria-selected="model === tab.value">{{ tab.label }}
    </button>
  </div>
</template>

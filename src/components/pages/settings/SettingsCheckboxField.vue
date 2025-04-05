<script setup lang="ts">
const model = defineModel()
defineProps<{
  title: string
  description: string
  id: string
}>()
</script>

<template>
  <li class="field-checkbox">
    <input type="checkbox" :id="id" v-model="model">
    <div>
      <label :for="id">{{ title }}</label>
      <slot><small>{{ description }}</small></slot>
    </div>
  </li>
</template>

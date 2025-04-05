<script setup lang="ts">
export interface Props {
  title: string
}
defineProps<Props>()
</script>

<template>
  <div class="stats">
    <p class="number is-size-2"><slot /></p>
    <small>{{ title }}</small>
  </div>
</template>


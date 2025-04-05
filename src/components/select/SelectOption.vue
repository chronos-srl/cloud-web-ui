<script setup lang="ts" generic="T">
defineProps<{
  value: T
}>()
</script>

<template>
  <li :data-value="value"><slot /></li>
</template>


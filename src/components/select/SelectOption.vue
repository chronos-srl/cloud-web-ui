<script setup lang="ts">
defineProps<{
  value: any
}>()
</script>

<template>
  <li :data-value="value"><slot /></li>
</template>


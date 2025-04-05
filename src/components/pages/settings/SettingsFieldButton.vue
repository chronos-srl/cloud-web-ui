<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <li class="field-button">
    <div>
      <strong>{{title}}</strong>
      <small>{{ description }}</small>
      <slot name="description"></slot>
    </div>
    <slot />
  </li>
</template>

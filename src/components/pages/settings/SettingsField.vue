<script setup lang="ts">
defineProps<{
  title: string
  description ?: string
}>()
</script>

<template>
  <li class="field-button">
    <div>
      <strong>{{ title }}</strong>
      <slot name="description"><small>{{ description }}</small></slot>
    </div>

    <slot/>
  </li>
</template>

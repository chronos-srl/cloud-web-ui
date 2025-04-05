<script setup lang="ts">
defineProps<{
  title: string
  danger: boolean
}>()
</script>

<template>
  <section>
    <h3>{{ title }}</h3>
    <div class="box" :class="{'danger':danger}">
      <ul>
        <slot/>
      </ul>
    </div>
  </section>
</template>


<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input type="text" class="inline is-size-2 editable-title" v-model.lazy="model"/>
</template>


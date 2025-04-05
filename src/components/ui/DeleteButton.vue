<script setup lang="ts">

const emits = defineEmits(["click"])
const props = defineProps<{ message: string }>()

function askUserConfirm() {
  if (!confirm(props.message)) {
    return false
  }

  emits("click")
}
</script>

<template>
  <button class="btn btn-delete" @click="askUserConfirm">
    <slot/>
  </button>
</template>


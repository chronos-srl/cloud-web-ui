<script setup lang="ts">
import {useTemplateRef} from "vue";

defineProps<{
  title: string
  description?: string
}>()
const dialogElement = useTemplateRef<HTMLDialogElement>('dialog')

const showModal = () => dialogElement.value!.showModal()

defineExpose({close, showModal})
</script>

<template>
  <dialog ref="dialog">
    <header class="flex-actions">
      <hgroup>
        <h5>{{ title }}</h5>
        <p v-if="description">{{ description }}</p>
      </hgroup>
      <button aria-label="Close" class="btn btn-close" @click.prevent="dialogElement!.close()">
        <i class="ri-close-line txt-lg" aria-hidden="true"></i>
      </button>
    </header>

    <slot></slot>
  </dialog>
</template>


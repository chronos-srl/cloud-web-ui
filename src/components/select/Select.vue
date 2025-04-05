<script setup lang="ts">
import {onMounted, useTemplateRef} from "vue";
import {useDetailsSelect} from "./select.ts";

const [model, modifiers] = defineModel<string | number>({
  set(value) {
    if (modifiers.number) {
      return parseInt(value as string, 10);
    } else if (modifiers.boolean) {
      return value === "true" || value === "yes";
    }

    return value
  }
})
const props = defineProps<{
  placeholder?: string;
  disabled?: boolean;
}>()
const emits = defineEmits(["change"]);

const detailsElement = useTemplateRef<HTMLDetailsElement>('details')
const {summaryText, selectFromModel, handleSelectItem, isPlaceholder} = useDetailsSelect(detailsElement, model, {
  summaryText: props.placeholder,
  emits: emits,
})

onMounted(selectFromModel)
</script>

<template>
  <details ref="details" class="select" :aria-disabled="disabled" :class="{'has-placeholder':isPlaceholder}">
    <summary>{{ summaryText }}</summary>
    <div class="details-menu dropdown">
      <ul @click="handleSelectItem">
        <slot></slot>
      </ul>
    </div>
  </details>
</template>

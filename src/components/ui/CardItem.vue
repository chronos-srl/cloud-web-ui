<script setup lang="ts">
defineProps<{
  label: string;
}>()
</script>

<template>
<div class="card-item">
  <label>{{label}}</label>
  <slot></slot>
</div>
</template>

<style>
.card-item {
  label {
    display: block;
    color: var(--textMuted);
    text-transform: uppercase;
    font-size: .8rem;
    margin-block-end: .4rem;
  }
}
</style>

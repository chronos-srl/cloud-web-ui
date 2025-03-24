<script setup lang="ts">
defineProps<{
  title: string;
  subTitle: string;
}>()
</script>

<template>
  <main>
    <header class="content flex-actions">
      <hgroup>
        <h2>{{ title }}</h2>
        <p>{{ subTitle }}</p>
      </hgroup>

      <div id="page-actions">
        <slot name="actions"></slot>
      </div>
    </header>

    <slot></slot>
  </main>
</template>


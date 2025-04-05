<script setup lang="ts">
import {useId} from "vue";

const model = defineModel()
defineProps<{
  label?: string
}>()
const id = useId()
</script>

<template>
  <div class="switch">
    <input type="checkbox" :id="id" v-model="model">
    <label :for="id">
      <slot name="label">{{ label }}</slot>
    </label>
    <slot></slot>
  </div>
</template>

<style>
.switch {
  position: relative;
  display: inline-block;
  padding-inline-start: 47px;
  min-height: 24px;

  input {
    position: absolute;
    width: 0;
    height: 0;
    z-index: -1;
    display: none;
  }

  label {
    display: block;
    min-height: 24px;
    line-height: 24px;
    font-weight: normal;
    padding-block-end: 0;
    cursor: pointer;

    &:before, &:after {
      position: absolute;
      content: "";
      display: block;
      left: 0;
      top: 0;
      border-radius: 24px;
    }

    &:before {
      width: 40px;
      height: 24px;
      background-color: var(--color3);
      transition: background var(--baseAnimationSpeed);
    }

    &:after {
      background: #fff;
      width: 16px;
      height: 16px;
      top: 4px;
      left: 4px;
      transition: left var(--baseAnimationSpeed);
    }
  }

  input:checked + label:before {
    border-color: var(--successColor);
    background-color: var(--successColor);
  }

  input:checked + label:after {
    left: 20px;
  }
}
</style>

<script setup lang="ts">
import type {PagedResponse, Pagination} from "@/models/paged";
import {computed} from "vue";

interface Props {
  pagination: PagedResponse<any>
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: "items"
})

const emits = defineEmits(["change"])
const hasPrev = computed(() => {
  return props.pagination.totalPages > 1 && props.pagination.page > 1
})
const hasNext = computed(() => {
  return props.pagination.totalPages > 1 && props.pagination.page < props.pagination.totalPages
})

function emitChange(v: number) {
  emits("change", {
    perPage: props.pagination.perPage,
    page: props.pagination.page + v,
  } as Pagination);
}
</script>

<template>
  <footer class="content pagination-footer">
    <p>Total {{ name }}: {{ pagination.totalItems }}</p>
    <div class="buttons" v-if="hasPrev || hasNext">
      <button :disabled="!hasPrev" @click="emitChange(-1)" class="btn btn-outline">
        <i class="ri-arrow-left-s-line"></i>
      </button>
      <button :disabled="!hasNext" @click="emitChange(1)" class="btn btn-outline">
        <i class="ri-arrow-right-s-line"></i>
      </button>
    </div>
  </footer>
</template>

<style>
.pagination-footer {
  font-size: .8em;
  color: var(--textMuted);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
</style>

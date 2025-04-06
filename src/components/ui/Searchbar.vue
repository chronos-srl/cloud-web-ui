<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps<{
  placeholder: string,
  searchLabel ?: string,
}>();
const emits = defineEmits(['search'])
const query = ref("")
const lastQuery = ref("")
const canSearch = computed(() => {
  if (lastQuery.value === query.value) {
    return false
  }

  return query.value.length == 0 || query.value.length > 3
})

function onSearch() {
  if (canSearch.value) {
    lastQuery.value = query.value
    emits('search', query.value)
  }
}
</script>

<template>
  <div class="content">
    <form class="page-searchbar" @submit.prevent="onSearch">
      <label for="search">
        <i class="ri-search-line"/>
      </label>
      <input id="search"
             v-model="query"
             autocomplete="off" spellcheck="false"
             :placeholder=props.placeholder>
      <button type="submit" class="btn btn-sm" :disabled="!canSearch">{{ searchLabel || 'Search' }}</button>
    </form>
  </div>
</template>

<style>
.page-searchbar {
  display: flex;
  align-items: center;
  gap: .3rem;
  width: 100%;
  min-height: 44px;
  padding: 5px 1em;
  margin: 0;
  white-space: nowrap;
  color: var(--textMuted);
  background: var(--color1);
  border-radius: var(--btnRadius);
  transition: color var(--baseAnimationSpeed), background var(--baseAnimationSpeed);

  input {
    background: var(--color1);
    border: none;
    box-shadow: none;

    &::placeholder {
      color: var(--disabledColor);
      font-family: 'Ubuntu Mono', monospace, emoji;
      font-size: .9em;
    }
  }

  button {
    --btnInline: 20px
  }
}
</style>

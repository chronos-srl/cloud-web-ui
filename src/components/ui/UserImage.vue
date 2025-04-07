<script setup lang="ts">
import {UserImageData} from "@/models/userImageData.ts";
import {computed, ref} from "vue";

const props = defineProps<{
  user: UserImageData
  small: boolean
}>()

const enableImage = ref(props.user.imageUrl !== undefined)
const userLetters = computed(() => {
  return (props.user.firstName.charAt(0) + props.user.lastName.charAt(0)).toUpperCase()
})

function disableImage() {
  console.warn("cannot load user image", props.user.imageUrl)
  enableImage.value = false
}
</script>

<template>
  <div class="user-avatar" :class="{'user-avatar-sm': small}">
    <img v-if="user.imageUrl && enableImage"
         loading="lazy"
         :src="user.imageUrl"
         :alt="'Profile image of ' + user.firstName"
         @error="disableImage"/>
    <span v-else class="text">{{ userLetters }}</span>
  </div>
</template>

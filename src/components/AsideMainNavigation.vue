<script setup lang="ts">

import {UserImageData} from "@/models/userImageData.ts";
import UserImage from "@/components/ui/UserImage.vue";

export interface MenuItem {
  title: string
  link: string | object
  icon: string
}

export interface MenuGroup {
  title?: string
  children: MenuItem[]
}

defineProps<{
  groups: MenuGroup[]
  user: UserImageData
}>()
</script>

<template>
  <aside class="nav">
    <header>Cloud</header>

    <div class="nav-menu">
      <div class="nav-group" v-for="(group, index) of groups" :key="index">
        <p class="nav-title" v-if="group.title">{{ group.title }}</p>
        <router-link class="nav-item"
                     v-for="item of group.children" :key="item.title"
                     :to="item.link"
                     :title="item.title">
          <i :class="item.icon"/>
        </router-link>
      </div>
    </div>

    <div class="nav-footer">
      <div class="user">
        <button ref="userAvatar" id="userAvatar" class="btn user-avatar" popovertarget="userMenuPopover">
          <UserImage :user="user" :small="true"/>
        </button>
        <div ref="userMenuPopover" id="userMenuPopover" popover class="dropdown">
          <router-link :to="{name: 'profile'}" class="dropdown-item">
            <i class="ri-tools-line"/> Profile
          </router-link>
          <hr>
          <button class="btn dropdown-item">
            <i class="ri-logout-box-r-line"/> Logout
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<style>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebarWidth);
  background: var(--baseColor);
  border-right: 1px solid var(--borderColor);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;
  --menuItemSize: 45px;

  header {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .nav-menu {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    flex-direction: column;
    padding-block: 1em;
    gap: 1em;
  }

  .nav-title {
    font-size: var(--smFontSize);
    font-weight: 500;
    margin-block-end: .5rem;
    text-align: center;
    color: var(--textMuted);
  }

  .nav-item {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    -webkit-user-select: none;
    user-select: none;
    color: var(--textMuted);
    min-width: var(--menuItemSize);
    min-height: var(--menuItemSize);
    border: 2px solid transparent;
    border-radius: 12px;
    transition: background var(--baseAnimationSpeed), border var(--baseAnimationSpeed);
    padding-block: .5rem;
    margin-block-end: .5rem;

    &:hover {
      background: var(--bodyColor);
    }

    i {
      font-size: 1.2rem;
    }

    &.router-link-active {
      background: var(--baseColor);
      border-color: var(--accentColor);
      color: var(--accentColor);
    }
  }

  .btn.user-avatar {
    background: var(--txtPrimaryColor);
    font-size: 1.2em;
    font-weight: 400;
    padding: 0;
    width: 40px;
    overflow: hidden;
  }
}

#userAvatar {
  anchor-name: --myAnchor;
}

#userMenuPopover {
  position-anchor: --myAnchor;
  position: fixed;
  inset: unset;
  bottom: anchor(top);
  left: anchor(start);
  margin: 5px 0;
}
</style>

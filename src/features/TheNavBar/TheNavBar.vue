<script setup lang="ts">
import { type Component, type DefineComponent, StyleValue } from 'vue';
import { RouterLink } from 'vue-router';
import { HistoryIcon, DumbbellIcon, FireIcon, ProfileIcon } from '@/components';
import { ERouteName } from '@/constants';

type NavItem = {
  label: string;
  icon?: Component | DefineComponent;
  to: string;
};

const navItems: NavItem[] = [
  {
    label: 'Profile',
    icon: ProfileIcon,
    to: ERouteName.PROFILE,
  },
  {
    label: 'History',
    icon: HistoryIcon,
    to: ERouteName.HISTORY,
  },
  {
    label: 'Workout',
    icon: FireIcon,
    to: ERouteName.WORKOUT,
  },
  {
    label: 'Exercises',
    icon: DumbbellIcon,
    to: ERouteName.EXERCISES,
  },
];

const style: StyleValue = {
  gridTemplateColumns: `repeat(${navItems.length}, minmax(0, 1fr))`,
};
</script>

<template>
  <div class="w-full grid bg-primary-900 absolute bottom-0" :style="style">
    <template v-for="navItem in navItems" :key="navItem.value">
      <RouterLink
        class="py-2 flex flex-col items-center justify-end font-bold nav-link"
        :to="{
          name: navItem.to,
        }"
      >
        <span class="text-2xl">
          <component :is="navItem.icon"></component>
        </span>
        <span class="mt-1 text-sm">{{ navItem.label }}</span>
      </RouterLink>
    </template>
  </div>
</template>

<style scoped>
.nav-link {
  @apply text-light opacity-60;
}
.nav-link.router-link-active {
  @apply text-secondary-500 opacity-100;
}
</style>

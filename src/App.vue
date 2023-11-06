<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { WsNavBar, NavItem, HistoryIcon } from './components';

const tabs: NavItem[] = [
  {
    label: 'Profile',
    value: 'profile',
    icon: HistoryIcon,
    props: { to: '/profile' },
  },
  {
    label: 'History',
    value: 'history',
    icon: HistoryIcon,
    props: { to: '/history' },
  },
  {
    label: 'Workout',
    value: 'workout',
    icon: HistoryIcon,
    props: { to: '/' },
  },
  {
    label: 'Exercises',
    value: 'exercises',
    icon: HistoryIcon,
    props: { to: '/exercises' },
  },
  {
    label: 'Tracking',
    value: 'tracking',
    icon: HistoryIcon,
    props: { to: '/tracking' },
  },
];
</script>

<template>
  <RouterView />

  <WsNavBar class="absolute bottom-0" :items="tabs" :item-is="RouterLink" />
</template>

<style></style>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { WsNavBar, NavItem, HistoryIcon, DumbbellIcon, FireIcon, ProfileIcon } from './components';
import { ERouteName } from './constants';

const route = useRoute();

const tabs: NavItem[] = [
  {
    label: 'Profile',
    value: ERouteName.PROFILE,
    icon: ProfileIcon,
    props: {
      to: { name: ERouteName.PROFILE },
    },
  },
  {
    label: 'History',
    value: ERouteName.HISTORY,
    icon: HistoryIcon,
    props: {
      to: { name: ERouteName.HISTORY },
    },
  },
  {
    label: 'Workout',
    value: ERouteName.WORKOUT,
    icon: FireIcon,
    props: {
      to: { name: ERouteName.WORKOUT },
    },
  },
  {
    label: 'Exercises',
    value: ERouteName.EXERCISES,
    icon: DumbbellIcon,
    props: {
      to: { name: ERouteName.EXERCISES },
    },
  },
  {
    label: 'Tracking',
    value: ERouteName.TRACKING,
    icon: HistoryIcon,
    props: {
      to: { name: ERouteName.TRACKING },
    },
  },
];
</script>

<template>
  <RouterView />

  <WsNavBar
    class="absolute bottom-0"
    :activeValue="route.name?.toString()"
    :items="tabs"
    :itemIs="RouterLink"
  />
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { WsTabBar, TabItem, HistoryIcon, DumbbellIcon, FireIcon, ProfileIcon } from './components';
import { ERouteName } from './constants';

const route = useRoute();

const tabs: TabItem[] = [
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
];
</script>

<template>
  <RouterView />

  <WsTabBar
    class="absolute bottom-0"
    :items="tabs"
    :itemIs="RouterLink"
    :activeValue="route.name?.toString()"
  />
</template>

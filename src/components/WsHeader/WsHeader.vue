<script setup lang="ts">
import { ref } from 'vue';
import { ArrowLeftIcon, MoreIcon } from '@/components';
import { vClickOutside } from '@/directives';

type MenuItem = {
  lable: string;
  disabled?: boolean;
  onClick: () => void;
};

defineProps<{
  title?: string;
  menu?: MenuItem[];
  onBack?: () => void;
}>();

const isShowMenu = ref(true);

const menuButtonRef = ref<HTMLButtonElement | null>(null);

const onClickOutside = () => {
  isShowMenu.value = false;
};
</script>

<template>
  <div class="pl-4 pr-2 h-11 bg-primary-900 text-secondary-500 flex items-center">
    <slot cls="font-semibold">
      <p class="font-semibold">{{ title }}</p>
    </slot>

    <div class="ml-auto flex relative">
      <button v-if="onBack" class="w-8 h-8 flex-center" @click="onBack">
        <ArrowLeftIcon />
      </button>
      <button
        v-if="menu?.length"
        ref="menuButtonRef"
        class="w-8 h-8 flex-center text-2xl"
        @click="isShowMenu = !isShowMenu"
      >
        <MoreIcon />
      </button>

      <div
        v-if="isShowMenu"
        v-clickOutside="{
          handler: onClickOutside,
          excludedEls: [menuButtonRef],
        }"
        class="absolute top-full px-4 py-2 rounded bg-primary-500"
      >
        <div v-for="(item, i) of menu" :key="i">
          <button @click="item.onClick">{{ item.lable }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

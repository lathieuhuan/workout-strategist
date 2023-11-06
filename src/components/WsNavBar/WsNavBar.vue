<script setup lang="ts">
import { type Component, type DefineComponent, StyleValue, PropType } from 'vue';

export type NavItem = {
  label: string;
  value: string;
  icon?: Component | DefineComponent;
  props?: Record<string, any>;
};

const props = defineProps<{
  value?: string;
  items: NavItem[];
  itemIs?: Component | DefineComponent;
}>();

defineEmits<{
  change: [newValue: string];
}>();

const styleObj: StyleValue = {
  gridTemplateColumns: `repeat(${props.items.length}, minmax(0, 1fr))`,
};
</script>

<template>
  <div class="w-full grid bg-primary-900 text-light text-sm" :style="styleObj">
    <template v-for="item in items" :key="item.value">
      <component
        :is="itemIs"
        :class="[
          'py-2 flex flex-col items-center justify-end font-bold',
          item.value === value ? '' : '',
        ]"
        v-bind="item.props"
      >
        <span class="text-2xl">
          <component :is="item.icon"></component>
        </span>
        <span class="mt-1">{{ item.label }}</span>
      </component>
    </template>
  </div>
</template>

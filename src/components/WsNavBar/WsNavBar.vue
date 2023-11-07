<script setup lang="ts">
import { type Component, type DefineComponent, StyleValue, ref, computed } from 'vue';

export type NavItem = {
  label: string;
  value: string;
  icon?: Component | DefineComponent;
  props?: Record<string, any>;
};

const props = defineProps<{
  initialValue?: string;
  activeValue?: string;
  items: NavItem[];
  itemIs?: Component | DefineComponent | keyof HTMLElementTagNameMap;
  itemProps?: Record<string, any>;
}>();

const emit = defineEmits<{
  (e: 'change', value: string, item: NavItem): void;
}>();

const localActiveValue = ref(props.initialValue);

const style: StyleValue = {
  gridTemplateColumns: `repeat(${props.items.length}, minmax(0, 1fr))`,
};

const onClickNavItem = (item: NavItem) => {
  localActiveValue.value = item.value;
  emit('change', item.value, item);
};

const finalActiveValue = computed(() => props.activeValue ?? localActiveValue.value);
</script>

<template>
  <div class="w-full grid bg-primary-900" :style="style">
    <template v-for="item in items" :key="item.value">
      <component
        :is="itemIs ?? 'button'"
        :class="[
          'py-2 flex flex-col items-center justify-end font-bold',
          item.value === finalActiveValue ? 'text-secondary-500' : 'text-light opacity-60',
        ]"
        @click="onClickNavItem(item)"
        v-bind="{ ...itemProps, ...item.props }"
      >
        <span class="text-2xl">
          <component :is="item.icon"></component>
        </span>
        <span class="mt-1 text-sm">{{ item.label }}</span>
      </component>
    </template>
  </div>
</template>

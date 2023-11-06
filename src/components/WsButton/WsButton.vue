<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import {
  bgColorByVariant,
  colorByVariant,
  fontSizeBySize,
  buttonPadding,
  ButtonVariant,
  ButtonShape,
  ButtonSize,
} from './WsButton.config';

export interface WsButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  boneOnly?: boolean;
}

// const {
//   variant = 'default',
//   shape = 'square',
//   size = 'medium',
//   boneOnly,
// } = defineProps<WsButtonProps>();
// const classes = [
//   'font-bold flex-center',
//   shape === 'circle' ? 'rounded-full' : 'rounded',
//   variant === 'custom'
//     ? ''
//     : boneOnly
//     ? colorByVariant[variant]
//     : [
//         'shadow-common',
//         bgColorByVariant[variant],
//         variant === 'negative' ? 'text-default' : 'text-black',
//       ],
//   rest.disabled ? 'opacity-50' : 'glow-on-hover',
// ];
</script>

<template>
  <button class="px-4 py-2 rounded border border-black ws-button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .ws-button {
    color: var(--text-primary);
  }
</style>
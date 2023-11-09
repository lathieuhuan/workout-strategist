import { Directive } from 'vue';

type Handler = (e: MouseEvent) => void;

type Option = {
  handler: Handler;
  excludedEls: Array<HTMLElement | null>;
};

type TrackedElement = HTMLElement & {
  __ClickOutsideHandler__: Handler;
};
export const vClickOutside: Directive<TrackedElement, Handler | Option> = {
  mounted: (el, binding) => {
    el.__ClickOutsideHandler__ = (e) => {
      const { target } = e;

      if (target instanceof Node) {
        let isExcluded = false;
        let callback: Handler | undefined;

        if (typeof binding.value === 'function') {
          callback = binding.value;
        } else {
          callback = binding.value.handler;
          isExcluded = binding.value.excludedEls.some((excludedEl) => {
            return excludedEl === target || excludedEl?.contains(target);
          });
        }

        if (!isExcluded && !(el === target || el.contains(target))) {
          callback?.(e);
        }
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideHandler__);
  },
  unmounted: (el) => {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__);
  },
};

export type ButtonVariant = 'default' | 'primary' | 'danger';
export type ButtonShape = 'circle' | 'round' | 'square';
export type ButtonSize = 'small' | 'medium';

export const bgColorByVariant: Record<ButtonVariant, string> = {
  default: 'bg-default',
  primary: 'bg-',
  danger: 'bg-',
};
export const colorByVariant: Record<ButtonVariant, string> = {
  default: 'bg-default',
  primary: 'bg-',
  danger: 'bg-',
};

export const buttonPadding: Record<ButtonShape, Record<ButtonSize, string>> = {
  circle: {
    small: 'px-3 py-1',
    medium: 'px-4 py-1.5',
  },
  round: {
    small: 'px-2 py-1',
    medium: 'px-3 py-1.5',
  },
  square: {
    small: 'px-3 py-1',
    medium: 'px-4 py-1.5',
  },
};
export const fontSizeBySize: Record<ButtonSize, string> = {
  small: 'text-sm leading-4',
  medium: 'text-base leading-5',
};

// export const iconButtonPadding = {
//   withFlesh: {
//     small: 'p-1.5',
//     medium: 'p-2',
//   },
//   boneOnly: {
//     small: 'p-1',
//     medium: 'p-1.5',
//   },
// };
// export const iconFontSizeBySize = {
//   withFlesh: fontSizeBySize,
//   boneOnly: {
//     small: 'text-lg leading-5',
//     medium: 'text-xl leading-6',
//   },
// };

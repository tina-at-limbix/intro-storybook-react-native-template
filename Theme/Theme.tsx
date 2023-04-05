import type { TypographyType } from './Typography';

export type ThemeType = {
  background: {
    primary: string,
    secondary: string,
    tertiary: string,
    disabled: string,
    error: string,
  },
  button: {
    primary: string,
    secondary: string,
    disabled: string,
  },
  text: {
    primary: string,
    primaryVariant: string,
    secondary: string,
    tertiary: string
    subHeader: string,
    disabled: string,
    error: string,
    link: string,
  },
  typography?: TypographyType,
};

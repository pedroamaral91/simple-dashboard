import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    semantic: {
      primary: string;
      secondary: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
      light: string;
      dark: string;
    },
    text: {
      colors: {
        primary: string;
        secondary: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        light: string;
        dark: string;
        body: string;
        muted: string;
      },
      hover: {
        primary: string;
        secondary: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        light: string;
        dark: string;
      },
    },
  }
}
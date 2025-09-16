// src/styles/Theme.js
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5865F2', // Discord blue
    secondary: '#FF4500', // Reddit orange
    accent: '#00D9FF',
    background: '#36393F', // Discord dark
    surface: '#40444B',
    text: '#FFFFFF',
    placeholder: '#72767D',
    error: '#ED4245',
    success: '#57F287',
  },
  dark: true,
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5865F2',
    secondary: '#FF4500',
    accent: '#00D9FF',
    background: '#FFFFFF',
    surface: '#F2F3F5',
    text: '#2E3338',
    placeholder: '#747F8D',
    error: '#ED4245',
    success: '#57F287',
  },
  dark: false,
};

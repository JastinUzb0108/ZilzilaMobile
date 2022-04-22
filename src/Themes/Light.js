import { DefaultTheme } from '@react-navigation/native';
const Light = {
    dark: false,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#F1FFE3',
        white: '#ffffff',
        black: '#000000',
        primary: '#FFAC30',
        secondary: '#F1F3F6',
        grey: '#9d9fa3',
        success: '#00F57F',
        error: '#E14161',
        text1: '#1B1D28',
        text2: '#3A4276',
        text3: '#7B7F9E',
        text4: '#00ACC0',
        boxBackground: '#5ECAB2',
    },
};

export default Light;

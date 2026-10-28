export type ColorScale = Record<
  100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  string
>

export type ColorName = 'gray' | 'blue' | 'green' | 'red' | 'orange'

export type ColorPalette = Record<ColorName, ColorScale> & {
  black: string
}

const light: ColorPalette = {
  black: '#000000',
  gray: {
    100: '#ffffff',
    200: '#f6f7f9',
    300: '#dde1e6',
    400: '#b9c0c9',
    500: '#7a818c',
    600: '#545b66',
    700: '#3a3f48',
    800: '#1b1e24',
    900: '#0f1115',
  },
  blue: {
    100: '#ecf1fd',
    200: '#cddafa',
    300: '#9db6f3',
    400: '#6a8ce8',
    500: '#4a72e0',
    600: '#2952cc',
    700: '#1f3fa3',
    800: '#182f7a',
    900: '#101f52',
  },
  green: {
    100: '#e7f5ea',
    200: '#cfebd6',
    300: '#a9d8b4',
    400: '#6fb883',
    500: '#3f9a58',
    600: '#1e7d34',
    700: '#176229',
    800: '#10491e',
    900: '#0a3014',
  },
  red: {
    100: '#fbeceb',
    200: '#f5d3d0',
    300: '#eab5b1',
    400: '#d9827b',
    500: '#c85a51',
    600: '#b3261e',
    700: '#8f1e18',
    800: '#6b1612',
    900: '#470e0b',
  },
  orange: {
    100: '#fff2df',
    200: '#fae0b8',
    300: '#f0c98a',
    400: '#dba04a',
    500: '#b87a1c',
    600: '#9a6000',
    700: '#7a4a00',
    800: '#593500',
    900: '#3a2300',
  },
}

const dark: ColorPalette = {
  black: '#000000',
  gray: {
    100: '#f3f4f6',
    200: '#d1d5db',
    300: '#9ca3af',
    400: '#6b7280',
    500: '#4b5260',
    600: '#2e303a',
    700: '#1f2028',
    800: '#16171d',
    900: '#0d0e12',
  },
  blue: {
    100: '#e0e7ff',
    200: '#c3d0fc',
    300: '#a5b8fa',
    400: '#849cf5',
    500: '#6a85ee',
    600: '#5470e0',
    700: '#3a52b8',
    800: '#26377f',
    900: '#1a2550',
  },
  green: {
    100: '#dcf5e3',
    200: '#b4e8c3',
    300: '#86d69e',
    400: '#5cc07c',
    500: '#3fa862',
    600: '#2e8a4d',
    700: '#236b3c',
    800: '#194d2b',
    900: '#12361f',
  },
  red: {
    100: '#fde4e2',
    200: '#fac3be',
    300: '#f59a93',
    400: '#ec7068',
    500: '#dc4f46',
    600: '#bf3a32',
    700: '#962d27',
    800: '#6c211d',
    900: '#4a1714',
  },
  orange: {
    100: '#fff0d6',
    200: '#fbdba0',
    300: '#f5c26b',
    400: '#e9a63c',
    500: '#cf8a1f',
    600: '#a86f14',
    700: '#805410',
    800: '#5a3b0c',
    900: '#3d2808',
  },
}

export const colors = { light, dark } as const

export type Theme = keyof typeof colors

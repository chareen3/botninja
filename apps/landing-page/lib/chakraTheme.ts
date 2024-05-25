import { extendTheme } from '@chakra-ui/react'

const config = { initialColorMode: 'dark', useSystemColorMode: false }

const fonts = {
  heading: 'Outfit',
  body: 'Open Sans',
}

const colors = {
  purple: {
    50: '#f2e6ff',
    100: '#d8b3ff',
    200: '#bf80ff',
    300: '#a64dff',
    400: '#8c1aff',
    500: '#7200e6',
    600: '#5c00b4',
    700: '#460082',
    800: '#300051',
    900: '#1a002c',
  },
  orange: {
    50: '#fff1da',
    100: '#ffd7ae',
    200: '#ffbf7d',
    300: '#ffa54c',
    400: '#ff8b1a',
    500: '#e67200',
    600: '#b45800',
    700: '#813e00',
    800: '#4f2500',
    900: '#200b00',
  },
  yellow: {
    50: '#fff9da',
    100: '#ffedad',
    200: '#ffe17d',
    300: '#ffd54b',
    400: '#ffc91a',
    500: '#e6b000',
    600: '#b38800',
    700: '#806200',
    800: '#4e3a00',
    900: '#1d1400',
  },
}

const components = {
  Button: {
    defaultProps: {
      colorScheme: 'puple',
    },
    variants: {
      solid: () => ({
        bg: 'purple.400',
        color: 'white',
        shadow: 'inset 0 1px 0 0 rgb(255 255 255/.2)',
        _hover: {
          bg: 'gray.600',
        },
      }),
    },
  },
  NumberInput: {
    defaultProps: {
      focusBorderColor: 'purple.200',
    },
  },
  Input: {
    defaultProps: {
      focusBorderColor: 'purple.200',
    },
  },
  Popover: {
    baseStyle: {
      popper: {
        width: 'fit-content',
        maxWidth: 'fit-content',
      },
    },
  },
  Tooltip: {
    baseStyle: {
      borderRadius: 'md',
    },
  },
  Link: {
    baseStyle: {
      _hover: { textDecoration: 'none' },
    },
  },
}

export const theme = extendTheme({
  fonts,
  components,
  colors,
  config,
})

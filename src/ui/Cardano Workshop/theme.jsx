import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { POPUP_WINDOW } from '../../config/config';
import '../app/components/styles.css';
import '@fontsource/ubuntu/latin.css';
import 'focus-visible/dist/focus-visible';

const colorMode = localStorage['chakra-ui-color-mode'];
// const theme = 
const inputSizes = {
  sm: {
    borderRadius: 'lg',
  },
  md: {
    borderRadius: 'lg',
  },
};

const Input = {
  sizes: {
    sm: {
      field: inputSizes.sm,
      addon: inputSizes.sm,
    },
    md: {
      field: inputSizes.md,
      addon: inputSizes.md,
    },
  },
  defaultProps: {
    focusBorderColor: 'red.900',
  },
};

const Checkbox = {
  defaultProps: {
    colorScheme: 'red.100',
  },
};

const Select = {
  defaultProps: {
    focusBorderColor: 'red.500',
  },
};

const Button = {
  baseStyle: {
    borderRadius: 'lg',
  },
};

const Switch = {
  baseStyle: {
    track: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  defaultProps: {
    colorScheme: 'red.100',
  },
};

const theme = extendTheme({
  components: {
    Checkbox,
    Input,
    Select,
    Button,
    Switch,
  },
  config: {
    useSystemColorMode: colorMode ? false : true,
  },
  styles: {
    global: {
      body: {
        // width: POPUP_WINDOW.width + 'px',
        // height: POPUP_WINDOW.height + 'px',
        background:"logoBrand.900",
        color:"white",
        overflow: 'hidden',
      },
      Button:{
        background:"buttonBrand.900",
        color:"grey.100"
      }
    },
  },
  fonts: {
    body: 'Ubuntu, sans-serif',
  },
  colors:{
      logoBrand:{
          900: "#1c0000",
          700: "#2a0000",
          500: "#730101",
          100: "#ce0404"
      },
      buttonBrand:{
        100:"#370e14",
        500:"#756c68",
        900:"#b8977b"
      }
      
    }
});

const Theme = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Theme;

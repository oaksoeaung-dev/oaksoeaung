import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const noirPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{surface.50}',
      100: '{surface.100}',
      200: '{surface.200}',
      300: '{surface.300}',
      400: '{surface.400}',
      500: '{surface.500}',
      600: '{surface.600}',
      700: '{surface.700}',
      800: '{surface.800}',
      900: '{surface.900}',
      950: '{surface.950}',
      color: 'light-dark({primary.950}, {primary.50})',
      contrastColor: 'light-dark(#ffffff, {primary.950})',
      hoverColor: 'light-dark({primary.800}, {primary.200})',
      activeColor: 'light-dark({primary.700}, {primary.300})',
    },
    surface: {
      50: '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.500}',
      600: '{slate.600}',
      700: '{slate.700}',
      800: '{slate.800}',
      900: '{slate.900}',
      950: '{slate.950}',
    },
    highlight: {
      background: 'light-dark({surface.200}, {surface.950})',
      focusBackground: 'light-dark({surface.300}, {surface.700})',
      color: 'light-dark({surface.950}, #ffffff)',
      focusColor: 'light-dark({primary.950}, #ffffff)',
    },
  },
});

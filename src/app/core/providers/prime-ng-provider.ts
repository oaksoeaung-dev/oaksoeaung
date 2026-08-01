import { EnvironmentProviders } from '@angular/core';
import { noirPreset } from '../../themes/presets/noir-preset';
import { providePrimeNG as Prime } from 'primeng/config';

export function providePrimeNG(): EnvironmentProviders {
  return Prime({
    theme: {
      preset: noirPreset,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'theme, base, primeng',
        },
      },
    },
    license:
      'eyJpZCI6IjVlYzFjNGU2LWZkYTEtNDZjNi1hZWVmLWQ1OGNmM2U0OGM5ZSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODMyMzgyOTAsImV4cCI6MTgxNDc3NDI5MH0.i54BgtI0o62Ut-cgnMe0NoSH0GUDFrxVmSVsVOPu8FvdFqQPUTruGDMk2hVOBOxz1w6wCfr4HrrKujPUByyZAQ',
    ripple: true,
  });
}

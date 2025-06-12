import { defineConfig, presetTypography } from 'unocss';
import presetWind3 from '@unocss/preset-wind3';

export default defineConfig({
  presets: [presetTypography(), presetWind3()],
});

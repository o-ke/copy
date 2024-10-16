import { defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
export default defineConfig({

  transformers: [transformerDirectives(), transformerVariantGroup()],
  // ...UnoCSS options
  presets: [presetUno(), presetAttributify()]
})

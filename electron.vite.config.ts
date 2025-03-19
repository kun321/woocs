import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import doocsViteConfig from './doocs.vite.config';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: doocsViteConfig
})

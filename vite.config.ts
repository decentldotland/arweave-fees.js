import { defineConfig } from 'vite'
import path from "node:path"
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'arweave-fees',
      fileName: (format) => `index.${format}.ts`,
    },
  },
})
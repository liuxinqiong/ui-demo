import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import sass from 'rollup-plugin-sass'

const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: [
    'src/**/*.test.tsx',
    'src/**/*.stories.tsx',
    'src/**/*.stories.mdx',
    'src/setupTests.ts',
  ],
}

const config = {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.es.js',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      tsconfigOverride: overrides,
    }),
    sass({
      output: 'dist/index.css',
    }),
  ],
}

export default config

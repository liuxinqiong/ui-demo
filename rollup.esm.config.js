import excludeDepsFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'

const config = {
  ...basicConfig,
  output: {
    file: 'dist/index.es.js',
    format: 'es',
  },
  plugins: [...basicConfig.plugins, excludeDepsFromBundle()],
  external: ['react', 'react-dom', 'axios'],
}

export default config

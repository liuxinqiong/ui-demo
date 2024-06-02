import basicConfig from './rollup.config'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import excludeDepsFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'

const config = {
  ...basicConfig,
  output: {
    // 对应的浏览器全局名称
    name: 'demo',
    exports: 'named',
    file: 'dist/index.umd.js',
    format: 'umd',
    // 由外部引入的，需要建立 mapping，不然找不到
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      axios: 'Axios',
    },
    plugins: [terser()],
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...basicConfig.plugins,
    // excludeDepsFromBundle(), // 避免用户使用 umd 时需要引入太多 cdn links，因此仅排除关键几个
  ],
  external: ['react', 'react-dom', 'axios'],
}

export default config

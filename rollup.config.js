import { dirname } from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const plugins = [
  resolve(),
  commonjs({
    include: /node_modules/,
    namedExports: {
      'prop-types': ['func', 'number', 'object', 'oneOfType', 'string']
    }
  }),
  babel({
    configFile: './babel.config.js',
    only: ['./source'],
    runtimeHelpers: true,
    sourceMaps: 'inline'
  })
]

const isExternal = id => !id.startsWith('.')
const input = './source/index.js'

const esm = [
  {
    input,
    output: {
      dir: dirname(pkg.module),
      exports: 'named',
      format: 'esm',
      name: 'ret-esm',
      sourcemap: true
    },
    external: isExternal,
    plugins
  }
]

const cjs = [
  {
    input,
    output: {
      dir: dirname(pkg.main),
      exports: 'named',
      format: 'cjs',
      name: 'ret-cjs',
      sourcemap: true
    },
    external: isExternal,
    plugins
  },
  {
    input,
    output: {
      file: `${dirname(pkg.main)}/${pkg.name}.min.js`,
      exports: 'named',
      format: 'cjs',
      name: 'ret-cjs-min',
      sourcemap: true
    },
    external: isExternal,
    plugins: plugins.concat(terser())
  }
]

const umd = [
  {
    input,
    output: {
      file: pkg.browser,
      exports: 'named',
      format: 'umd',
      globals: { react: 'React' },
      name: 'ret-umd',
      sourcemap: true
    },
    external: ['react'],
    plugins: plugins.concat(terser())
  }
]

let config

switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs
    break
  case 'esm':
    config = esm
    break
  case 'umd':
    config = umd
    break
  default:
    config = cjs.concat(esm).concat(umd)
}

export default config

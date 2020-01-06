import { dirname } from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-auto-external'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const plugins = [
  resolve(),
  external(),
  commonjs({ include: /node_modules/ }),
  babel({
    configFile: './babel.config.js',
    only: ['./source'],
    runtimeHelpers: true,
    sourceMaps: 'inline'
  })
]

const esm = {
  dir: dirname(pkg.module),
  exports: 'named',
  format: 'esm',
  name: 'ree-esm',
  sourcemap: true
}

const cjs = {
  dir: dirname(pkg.main),
  exports: 'named',
  format: 'cjs',
  name: 'ree-cjs',
  sourcemap: true
}

const umd = {
  file: pkg.browser,
  exports: 'named',
  format: 'umd',
  globals: {
    react: 'React',
    'react-dom': 'reactDom',
    'prop-types': 'propTypes'
  },
  name: 'ree-umd',
  sourcemap: true
}

const config = [
  {
    input: './source/index.js',
    output: [esm, cjs, umd],
    plugins
  }
]

export default config

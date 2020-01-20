const presets = ['@babel/preset-env', '@babel/preset-react']

const plugins = [['transform-react-remove-prop-types', { mode: 'wrap' }]]

module.exports = { presets, plugins }

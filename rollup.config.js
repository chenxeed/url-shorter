import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './public/javascripts/src/index.js',
  output: {
      file: './public/javascripts/dist/bundle.min.js',
      format: 'iife',
      name: 'bundle'
  },
  plugins: [ resolve() ]
}
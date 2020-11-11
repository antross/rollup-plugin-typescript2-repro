import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['./src/one.js', './src/two.js'],
  output: {
    dir:  `out/test`,
    entryFileNames: '[name].js',
    format: 'esm'
  },
  plugins: [
    typescript({
      clean: true,
      include: ['*.js', '**/*.js'],
      tsconfig: 'src/tsconfig.json'
    })
  ]
};

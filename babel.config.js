module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/typescript'],
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};

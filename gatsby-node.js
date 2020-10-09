const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'hyyar-ui/lib': path.resolve(__dirname, '../src/components/'),
        'hyyar-ui/esm': path.resolve(__dirname, '../src/components/'),
        'hyyar-ui': path.resolve(__dirname, '../src/components/')
      }
    }
  });
};

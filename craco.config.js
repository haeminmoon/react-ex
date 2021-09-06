const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
    // configure: (webpackConfig, { env }) => {
    //   if (env === "production") {
    //     const instanceOfMiniCssExtractPlugin = webpackConfig.plugins.find(
    //       (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
    //     );
    //     instanceOfMiniCssExtractPlugin.options.ignoreOrder = true;
    //   }

    //   return webpackConfig;
    // },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};

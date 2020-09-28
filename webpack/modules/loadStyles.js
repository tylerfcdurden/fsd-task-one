// Core
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// LoadStyles
export const loadStyles = (env) => {
  const isDev = env === "development";
  return {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
              options: {},
            },
            {
              loader: "css-loader",
              options: {},
            },
            {
              loader: "sass-loader",
              options: {},
            },
          ],
        },
      ],
    },
    plugins: isDev
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
          }),
        ],
  };
};

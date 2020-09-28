// Core
import HtmlWebpackPlugin from "html-webpack-plugin";
import { readdirSync } from "fs";

// Constants
import { PUG_DIR, ASSETS_DIR } from "../utils/constants";

export const setupPug = () => {
  const pages = readdirSync(`${PUG_DIR}/pages/`).filter((filename) =>
    filename.endsWith(".pug")
  );
  return {
    module: {
      rules: [{ test: /\.pug$/, use: "pug-loader" }],
    },
    plugins: pages.map((page) => {
      return new HtmlWebpackPlugin({
        template: `${PUG_DIR}/pages/${page}`,
        filename: `${page.replace(/\.pug/, ".html")}`,
        favicon: `${ASSETS_DIR}/images/favicon.ico`,
      });
    }),
  };
};

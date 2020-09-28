// Core
import HtmlWebpackPlugin from "html-webpack-plugin";

// Constants
import { HTML_DIR, ASSETS_DIR } from "../utils/constants";

export const setupHtml = () => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: `${HTML_DIR}/index.html`,
        title: "🚀 FSD!!!",
        favicon: `${ASSETS_DIR}/images/favicon.ico`,
      }),
    ],
  };
};

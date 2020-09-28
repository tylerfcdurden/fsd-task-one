// Core
import { merge } from "webpack-merge";
import { HotModuleReplacementPlugin } from "webpack";

// Common Config
import getCommonConfig from "./webpack.common";

// Constants
import { DIST_DIR } from "../utils/constants";

// Dev Cofig
export default () => {
  return merge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    entry: {
      main: ["webpack-hot-middleware/client"],
    },
    output: {
      filename: "[name].js",
      path: DIST_DIR,
    },
    devServer: {
      contentBase: DIST_DIR,
      overlay: true,
      hot: true,
      open: true,
      historyApiFallback: true,
      quiet: true,
      stats: {
        colors: true,
        chunks: false,
        modules: false,
      },
    },
    plugins: [new HotModuleReplacementPlugin()],
  });
};

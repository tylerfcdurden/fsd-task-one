// Core
import { merge } from "webpack-merge";

// Common Config
import getCommonConfig from "./webpack.common";

// Constants
import { BUILD_DIR } from "../utils/constants";

// Prod Cofig
export default () => {
  return merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    output: {
      filename: "[name].[contenthash].js",
      path: BUILD_DIR,
    },
  });
};

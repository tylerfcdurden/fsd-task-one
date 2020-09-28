// Core
import { merge } from "webpack-merge";

// Common Config
import getCommonConfig from "./webpack.common";

// Constants
import { DIST_DIR } from "../utils/constants";

// Dev Cofig
export default () => {
  return merge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    output: {
      filename: "[name].js",
      path: DIST_DIR,
    },
  });
};

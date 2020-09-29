// Core
import CopyWebpackPlugin from "copy-webpack-plugin";

// Constants
import { ASSETS_DIR, BUILD_DIR, DIST_DIR } from "../utils/constants";

// useCopyPlugin
export const useCopyPlugin = (env) => {
  const isDev = env === "development";
  return {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: `${ASSETS_DIR}/images`,
            to: `${isDev ? DIST_DIR : BUILD_DIR}/images`,
          },
        ],
      }),
    ],
  };
};

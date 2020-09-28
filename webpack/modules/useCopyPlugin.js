// Core
import CopyWebpackPlugin from "copy-webpack-plugin";

// Constants
import { ASSETS_DIR } from "../utils/constants";

// useCopyPlugin
export const useCopyPlugin = () => {
  return {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: `${ASSETS_DIR}/fonts`,
            to: "/fonts",
          },
        ],
      }),
    ],
  };
};

// Constants
import { SRC_DIR, DIST_DIR } from "../utils/constants";

// Common Cofig
export default () => {
  return {
    mode: "none",
    devtool: false,
    entry: SRC_DIR,
    output: {
      filename: "bundle.js",
      path: DIST_DIR,
    },
  };
};

// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR, ASSETS_DIR } from "../utils/constants";

// Modules
import * as modules from "../modules";

// Env
const env = process.env.NODE_ENV;

// Common Cofig
export default () => {
  return merge(
    {
      entry: {
        main: [SRC_DIR],
      },
    },
    modules.useCopyPlugin(env),
    modules.useCleanPlugin(env),
    modules.setupPug(),
    modules.loadStyles(env),
    modules.loadFonts(),
    modules.loadImages()
  );
};

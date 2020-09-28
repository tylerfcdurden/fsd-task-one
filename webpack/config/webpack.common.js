// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../utils/constants";

// Modules
import * as modules from "../modules";

// Common Cofig
export default () => {
  return merge(
    {
      entry: [SRC_DIR],
    },
    modules.setupHtml()
  );
};

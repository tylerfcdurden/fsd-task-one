// Core
import webpack from "webpack";
import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import chalk from "chalk";

// Dev Config
import getDevConfig from "../config/webpack.dev";

// Constants
import { HOST, PORT, DIST_DIR } from "../utils/constants";

// Compiler
const compiler = webpack(getDevConfig());

const app = express();
const staticMiddleware = express.static(DIST_DIR);

const devMiddleware = webpackDevMiddleware(compiler, getDevConfig().devServer);
const hotMiddleware = webpackHotMiddleware(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(staticMiddleware);

app.listen(PORT, HOST, () =>
  console.log(chalk.blueBright(`Server is listening at http://${HOST}:${PORT}`))
);

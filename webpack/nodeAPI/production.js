// Core
import webpack from "webpack";
import chalk from "chalk";

// Prod Config
import getProdConfig from "../config/webpack.prod";

// Compiler
const compiler = webpack(getProdConfig()); // Compiler Instance

// Compilation
compiler.run((err, stats) => {
  // Configuration Errors
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  console.log(chalk.greenBright("Build is completed!"));

  const info = stats.toJson();

  // Compilation Errors
  if (stats.hasErrors()) {
    console.error(chalk.redBright(info.errors));
  }

  // Compilation Warnings
  if (stats.hasWarnings()) {
    console.warn(chalk.yellowBright(info.warnings));
  }

  // Stats
  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    })
  );
});

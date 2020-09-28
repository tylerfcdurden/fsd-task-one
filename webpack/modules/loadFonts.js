// Load Fonts
export const loadFonts = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    },
  };
};

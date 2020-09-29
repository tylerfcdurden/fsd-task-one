// Load Images
export const loadImages = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(svg|png|jpg|jpeg|gif)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    },
  };
};

// postcss loader config for vite. loads preset env and nesting
module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "nesting-rules": true,
      },
    }),
    require("autoprefixer"),
  ],
};

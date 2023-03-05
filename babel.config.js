module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@Global": "./src/global",
            "@Components": "./src/components",
            "@Screens": "./src/screens",
            "@Routes": "./src/routes",
            "@Context": "./src/context",
            "@Assets": "./src/assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["inline-dotenv"],
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
            "@Config": "./src/config",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};

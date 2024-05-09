const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["quasar"],

  pluginOptions: {
    lintOnSave: false,
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});

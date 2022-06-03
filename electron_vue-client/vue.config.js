module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Swashing",
        win: {
          icon: './public/img/icons/win/icon.ico'
        },
      },
    },
  },
};

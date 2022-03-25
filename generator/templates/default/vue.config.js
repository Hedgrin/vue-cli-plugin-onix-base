module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '~@/scss/__colors.scss';
        `
      }
    }
  },
  pwa: {
    name: "OnixBase",
    themeColor: "#FFFFFF",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxOptions: {
      exclude: [/index\.html$/],
    },
  },
};

module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      "@vuelidate/core": "^2.0.0-alpha.34",
      "@vuelidate/validators": "^2.0.0-alpha.26",
      "axios": "^0.24.0",
      "dayjs": "^1.10.7",
      "vuex-multi-tab-state": "^1.0.17",
      "vuex-persistedstate": "^4.1.0"
    },
    devDependencies: {
      "@prettier/plugin-pug": "^1.19.1",
      "pug": "^3.0.2",
      "pug-plain-loader": "^1.1.0",
    }
  })

  api.render(`./templates/default`)
}

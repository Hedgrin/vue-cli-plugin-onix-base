const fs = require('fs');

module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      "@vuelidate/core": "^2.0.0-alpha.44",
      "@vuelidate/validators": "^2.0.0-alpha.31",
      "axios": "^0.24.0",
      "dayjs": "^1.11.4",
      "pinia": "^2.0.17",
      "pinia-plugin-persistedstate": "^1.6.3",
      "pinia-shared-state": "^0.2.8",
    },
    devDependencies: {
      "@prettier/plugin-pug": "^1.20.1",
      "pug": "^3.0.2",
      "pug-plain-loader": "^1.1.0",
      "prerender-spa-plugin-next": "^4.2.3",
      "sass": "^1.54.3",
      "sass-loader": "^12.0.0",
      "lint-staged": "^9.5.0",
      "vue-cli-plugin-pinia": "^0.1.4",
    }
  })
  api.onCreateComplete(() => {
    fs.unlinkSync(api.resolve('src/views/HomeView.vue'));
    fs.unlinkSync(api.resolve('src/views/AboutView.vue'));
    fs.unlinkSync(api.resolve('src/components/HelloWorld.vue'));
  });
  api.render(`./templates/default`)
}

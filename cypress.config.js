const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com",
      env: {
             "API_BASE_URL": "https://jsonplaceholder.typicode.com"
           },           

      defaultCommandTimeout: 20000,

    setupNodeEvents(on, config) {      // implemallureWriter(on, config);
        allureWriter(on, config);
        return config
    },
  },
});

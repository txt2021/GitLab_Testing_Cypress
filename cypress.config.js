const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    viewportHeight: 900,
    viewportWidth: 1491,
    baseUrl: 'https://about.gitlab.com/',
    chromeWebSecurity: false,
    video: false,
    screenshot: false
    
  },
  
});

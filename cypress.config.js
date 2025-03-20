const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yandw7",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },

  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    grepFilterSpecs: true,
    grepOmitFiltered: true
  },

  video: true,
  screenshotOnRunFailure: false,
  videoOnFailOnly: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 3500,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0
  }
});

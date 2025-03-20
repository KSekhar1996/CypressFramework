const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yandw7",
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },

  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  },

  video: true,
  screenshotOnRunFailure: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 3500,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0
  }
});

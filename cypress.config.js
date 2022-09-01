const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges : false,
    pageLoadTimeout : 150000,
    baseUrl : "http://automationpractice.com/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

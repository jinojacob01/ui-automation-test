const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
});

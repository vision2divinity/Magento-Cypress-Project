const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hh1mua',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
        "chromeWebSecurity"; false
      
    },
  },
});

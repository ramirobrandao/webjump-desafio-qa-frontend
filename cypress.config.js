const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://magento.nublue.co.uk/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    reporter: 'mochawesome',
    screenshotOnRunFailure: true,  //gera print quando um teste falhar
    "reporterOptions": {
      "reportDir": "cypress/reports/mochawesome-report",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
      "reportFilename": "report",
      "timestamp": "mmddyyyy_HHMMss",
      "inlineAssets": true,
      "toOpen": true,
      "reportPageTitle": "Relatório de execução de testes no Luma Ecommerce - Magento",
      "embeddedScreenshots": true  //integrar prints no relatório
    },


    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});

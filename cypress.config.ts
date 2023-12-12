import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: ['cypress/component/**/*.cy.ts', 'cypress/unit/**/*.cy.ts']
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  video: false, 
  screenshotOnRunFailure: false,
});

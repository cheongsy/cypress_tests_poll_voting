import { defineConfig } from 'cypress'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'
import nodePolyfills from '@esbuild-plugins/node-modules-polyfill'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin'

export default defineConfig({
  defaultCommandTimeout: 10000,
  blockHosts: ["*google-analytics.com*","*googleads.g.doubleclick.net*","*pagead2.googlesyndication.com*"],
  e2e: {
    baseUrl: 'https://polls.io/',
    async setupNodeEvents(on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config)

      getCompareSnapshotsPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)]
        })
      )

      return config
    },
    specPattern: 'cypress/e2e/portals/**/*.{features,feature}',
  },
})

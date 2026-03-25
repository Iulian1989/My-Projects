// @ts-check

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  reporter: [
    ['html'],
    ['allure-playwright']

  ],

  testDir: './tests',

  use: {
    baseURL: 'https://automationexercise.com',
    slowMo: 5000,
    headless: false,
    screenshot: 'only-on-failure',
     video: 'retain-on-failure',
     trace: 'on-first-retry',
      browserName: 'chromium',
  },
  

});

/**
 * @see https://playwright.dev/docs/test-configuration
 */

  /* Configure projects for major browsers */
 
    
    
   
    


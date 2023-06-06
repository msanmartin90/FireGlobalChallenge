import { defineConfig } from 'cypress'

export default defineConfig({
  pageLoadTimeout: 90000,
  e2e: {
    baseUrl: 'https://www.amazon.com',
  },
})

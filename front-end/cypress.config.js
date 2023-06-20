import { defineConfig } from 'cypress';

export default defineConfig({
  watchForFileChanges: false,
  env: {
    TOKEN: '',
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5173',
  },
});

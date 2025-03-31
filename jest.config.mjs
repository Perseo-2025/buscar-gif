/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom", // ✅ Correcto
  setupFiles: ["<rootDir>/jest.setup.js"], // ✅ Debe ser un array
  clearMocks: true,
};

export default config;

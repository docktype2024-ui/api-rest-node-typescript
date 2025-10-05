
import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  coverageReporters:[
    'json'
  ],
  setupFilesAfterEnv: [
    './tests/jest.setup.ts'
  ],
  testMatch: [
    '<rootDir>/tests/**/*.test.ts',
  ],
};
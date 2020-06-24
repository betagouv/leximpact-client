const jestConfig = {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/tests/**/*.(test|spec).{js,jsx,ts,tsx}"],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
};

module.exports = jestConfig;

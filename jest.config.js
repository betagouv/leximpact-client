const jestConfig = {
  moduleFileExtensions: ["js", "jsx", "json"],
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
  testMatch: ["**/tests/**/*.(test|spec).{js,jsx}"],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};

module.exports = jestConfig;

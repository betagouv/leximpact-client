const jestConfig = {
  moduleFileExtensions: ["js", "jsx", "json"],
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/tests/**/*.(test|spec).{js,jsx}"],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
};

module.exports = jestConfig;

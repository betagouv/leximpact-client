const jestConfig = {
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: { "\\.(scss)$": "identity-obj-proxy" },
    setupFilesAfterEnv: ["<rootDir>tests/enzyme.config.js"],
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.test.js?(x)"],
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
}

module.exports = jestConfig

const jestConfig = {
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>tests/enzyme.config.js"],
    testMatch: ["**/tests/**/*.test.js?(x)"],
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
}

module.exports = jestConfig

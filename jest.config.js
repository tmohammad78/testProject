module.exports = {
    coverageDirectory: '.coverage',
    roots: [
        "<rootDir>/src"
    ],
    transformIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ['./jest.setup.js']
}
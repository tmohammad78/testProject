module.exports = {
    coverageDirectory: '.coverage',
    roots: [
        "<rootDir>/src"
    ],
    transformIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    }
}
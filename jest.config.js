module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [
        '<rootDir>/test/testSetup.ts'
    ]
};
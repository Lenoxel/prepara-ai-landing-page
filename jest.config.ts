import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    transform: {
        "^.+\\.svelte$": [
            "svelte-jester",
            {
                preprocess: true
            },
        ],
        "^.+\\.ts$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    moduleFileExtensions: ["ts", "js", "svelte"],
    extensionsToTreatAsEsm: [".svelte", ".ts"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

module.exports = config;
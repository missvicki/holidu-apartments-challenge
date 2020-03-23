module.exports = {
  roots: ["<rootDir>/src"],
  "verbose": true,
  "setupFiles": [
    "./src/setupTests.js"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,mjs}",
    "!**/node_modules/**",
    "!**/src/routes/**",
    "!**/src/store/**",
    "!**/src/index.js",
    "!**/src/serviceWorker.js"
  ],
  "roots": [
    "<rootDir>"
  ],
  "testMatch": [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  },
};

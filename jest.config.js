

module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/components"],
  
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    },
    testEnvironment: "jsdom",
  
  
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };
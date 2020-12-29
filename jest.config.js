module.exports = {
  verbose: true,
  roots: ['<rootDir>/src/components'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^src/components$': '<rootDir>/src/components/index.tsx',
    '^src/components(.*)$': '<rootDir>/src/components/$1',
  },
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};

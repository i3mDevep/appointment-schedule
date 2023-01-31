// cucumber.js
let common = [
  'cases/**/*.feature', // Specify our feature files
  '--require-module ts-node/register', // Load TypeScript module
  '--require features/step_definitions.js', // Load step definitions
].join(' ');

module.exports = {
  default: common,
};

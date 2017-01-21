
'use strict';

const path = require('path');
const expect = require('expect');
const sinon = require('sinon');
const assertions = require('./assertions');

console.log(assertions["Test Controller Method"]);
console.log(assertions["Test Service Method"]);
console.log(assertions["Test Repository Method"]);
console.log(assertions["Test Injection Method"]);
const mock = {
};

/**
* helper: /Users/benlugavere/Desktop/development/vscode-things/
* mocha --require clarify snippets/assertions.test.js --watch
* istanbul cover --print both node_modules/.bin/_mocha -- snippets/assertions.test.js
*/

describe(path.basename(__filename).replace('.test.js', ''), () => {
  let sandbox;

  before(() => {

  });

  after(() => {

  });

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should pass', () => {
    expect(true).toBe(true);
  });

  // it('should also pass', done => {
  //   expect(true).toBe(true);
  //   done();
  // });
});

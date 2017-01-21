
'use strict';

const path = require('path');
const expect = require('expect');
const sinon = require('sinon');
const Builder = require('./Builder');

/**
* helper: /Users/benlugavere/Desktop/development/vscode-things/snippets/builder.test.js
* mocha --require clarify ./path/to/file.test.js --watch
* istanbul cover --print both node_modules/.bin/_mocha -- ./path/to/file.test.js
*/

describe(path.basename(__filename).replace('.test.js', ''), () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should also pass', done => {
    expect(true).toBe(true);
    done();
  });
});

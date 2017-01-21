
'use strict';

const path = require('path');
const expect = require('expect');
const sinon = require('sinon');
const Builder = require('./Builder');

/**
* helper: snippets/builder.test.js
* mocha snippets/builder.test.js --watch
* istanbul cover --print both node_modules/.bin/_mocha -- ./path/to/file.test.js
*/

describe(path.basename(__filename).replace('.test.js', ''), () => {
  let sandbox;
  let builder;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    builder = new Builder();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('add', () => {
    it('should add an array', () => {
      const result = builder.add(['ben']).build();
      expect(result[0]).toEqual('ben');
      expect(result.length).toBe(1);
    });
  });
  describe('scripts', () => {
    it('should build a script', () => {
      const result = builder.add(['ben']).scripts().build();
      expect(result[0]).toEqual('ben');
      expect(result.length).toBe(4);
    });
  });
});

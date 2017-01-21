


// declarations
// before
// after
// beforeEach
// afterEach
// describe(text, numIndents)
// 

class Builder {
  constructor(snippet) {
    this.snippet = snippet || [];
    this.add = this.add.bind(this);
    this.scripts = this.scripts.bind(this);
    this.eol = this.eol.bind(this);
    this.strict = this.strict.bind(this);
  }

  eol() {
    this.add(['']);
    return this;
  }
  strict() {
    this.add([
			"",
			"'use strict';",
			"",      
    ]);
    return this;
  }
  add(arr) {
    this.snippet = this.snippet.concat(arr);
    return this;
  }

  scripts() {
    this.snippet = this.snippet.concat(
      '/**',
      '* helper: ${TM_FILEPATH}',
      '* mocha --require clarify ./path/to/file.test.js --watch',
      '* istanbul cover --print both node_modules/.bin/_mocha -- ./path/to/file.test.js',
      '* eslint ./path/to/file.test.js --watch',
      '*/'
    )
    return this;
  }

  build() {
    return this.snippet;
  }

}

module.exports = Builder;
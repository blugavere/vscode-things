


// declarations
// script commands (mocha, istanbul, eslint)
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
  }
  eol() {
    this.add(['']);
    return this;
  }
  add(arr) {
    this.snippet = this.snippet.concat(arr);
    return this;
  }
  scripts() {
    this.snippet = this.snippet.concat(
      'foo',
      'bar',
      'buzy'
    )
    return this;
  }
  build() {
    return this.snippet;
  }

}

module.exports = Builder;
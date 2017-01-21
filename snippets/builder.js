


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
  }
  scripts() {
    this.snippet = this.snippet.concat(
      ' foo',
      'bar',
      ' buzy'
    )
    return this;
  }

}
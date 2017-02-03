
const Builder = require('./Builder');

const v1 = '$1';
const assertNoErr = "           expect(err).toNotExist('expected no error to be thrown');";
const assertErr = "           expect(err).toExist('expected error to exist in cb');";
const assertResExists = "           expect(res).toExist('expected cb to return a result');";
const assertResCalled = "           expect(res.send.called).toBe(true, 'res.send never called');";
const assertStatus = "           expect(res.status.calledWith(200)).toBe(true, 'incorrect error code');";
const assertStatusErr = "           expect(res.status.calledWith(400)).toBe(true, 'incorrect error code');";

const wrapDescribe = (desc, arr) => [].concat.apply([], [
  [`     describe('${desc}', () => {`],
    arr,
  ['     });']
]);
const wrapIt = (desc, arr) => [].concat.apply([], [
  [`       it('${desc}', done => {`],
    arr,
  ['       });', '']
]);

module.exports = {
  "Test Controller Method": {
    prefix: "test:ctrl:method",
    body: new Builder().add(wrapDescribe('$1',
      [].concat.apply([], [
        wrapIt(`should $1`, [
          '         service.$1.yields(null, {});',
          '         ctrl.$1(req, res);',
          '         setImmediate(() => {',
          assertResCalled,
          assertStatus,
          '           done();',
          '         });',
        ]),
        wrapIt(`should fail gracefully`, [
          '         service.$1.yields({});',
          '         ctrl.$1(req, res);',
          '         setImmediate(() => {',
          assertResCalled,
          assertStatusErr,
          '           done();',
          '         });',
        ]),        
      ])
    )).eol().build()
  },
  "Test Service Method": {
    prefix: "test:service:method",
    body: new Builder().add(wrapDescribe('$1',
      [].concat.apply([], [
        wrapIt(`should $1`, [
          "         repo.$1.yields(null, {})",
          "         service.$1('foo', (err, res) => {",
          assertNoErr,
          assertResExists,
          '           done();',
          '         });',
        ]),
        wrapIt(`should fail gracefully`, [
          "         repo.$1.yields({})",
          "         service.$1('foo', err => {",
          assertErr,
          '           done();',
          '         });',
        ]),
      ])
    )).eol().build()
  },
  "Test Repository Method": {
    prefix: "test:repo:method",
    body: new Builder().add(wrapDescribe('$1',
      [].concat.apply([], [
        wrapIt(`should $1`, [
          "         Mockgoose.find.yields(null, {})",
          "         repo.$1('foo', (err, res) => {",
          assertNoErr,
          assertResExists,
          '           done();',
          '         });',
        ]),
        wrapIt(`should fail gracefully`, [
          "         Mockgoose.find.yields({})",
          "         repo.$1('foo', err => {",
          assertErr,
          '           done();',
          '         });',
        ]),
      ])
    )).eol().build()
  },
  "Test Injection Method": {
    prefix: "test:inject:method",
    body: new Builder().add(wrapDescribe('Dependency Injection Support',
        wrapIt(`should implement di container spec`, [
          "         expect($1.inject).toExist('expected prop inject to exist');",
          "         expect(Array.isArray($1.inject)).toBe(true, 'expected di static to return an array');",
          "         done();"
        ])
    )).eol().build()
  },
}


const wrapBeforeEach = arr => [].concat.apply([], [
  [
    '	beforeEach(() => {',
    '		sandbox = sinon.sandbox.create();'
    ],
    arr,
  ['     });']
]);

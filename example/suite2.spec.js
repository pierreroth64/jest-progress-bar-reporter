const { DELAY_MS } = require('./conf');

describe('Test suite #2', () => {
  it('this is a passing test', done => setTimeout(done, DELAY_MS));
  it('this is a passing test', () => {});
});

const { DELAY_MS } = require('./conf');

describe('Test suite #5', () => {
  it('this is a passing test', done => setTimeout(done, DELAY_MS));
  it('this is a passing test', () => {});
  it.skip('this is a pending test', () => {});
});

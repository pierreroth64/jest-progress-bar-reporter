const JestProgressBarReporter = require('./jest-progress-bar-reporter');

describe('Jest Progress Bar reporter', () => {
  let reporter;

  beforeEach(() => {
    reporter = new JestProgressBarReporter();
  });

  it('should implement onRunComplete ', () => {
    expect(reporter.onRunComplete).toBeDefined();
  });

  it('should implement onRunStart ', () => {
    expect(reporter.onRunStart).toBeDefined();
  });

  it('should implement onTestResult ', () => {
    expect(reporter.onTestResult).toBeDefined();
  });
});

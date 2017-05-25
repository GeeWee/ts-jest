import runJest from '../__helpers__/runJest';

describe('Coverage', () => {

  it('should collect the correct amount of coverage', () => {
    const result = runJest('../simple', ['--no-cache', '--coverage']);

    const output = result.stdout.toString();

    expect(output).toContain('Statements   : 62.5% ( 10/16 )');
    expect(output).toContain('Branches     : 33.33% ( 2/6 )');
    expect(output).toContain('Functions    : 66.67% ( 4/6 )');
    expect(output).toContain('Lines        : 61.54% ( 8/13 )');
  });

});

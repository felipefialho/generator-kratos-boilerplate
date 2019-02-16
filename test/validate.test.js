const assert = require('yeoman-assert');

const validate = require('../generators/app/validate');

describe('Validate Tests', () => {
  it('should return true with name', (done) => {
    const message = validate.validateName('Felipe Fialho');
    assert.equal(message, true);
    done();
  });

  it('should return an error without name', (done) => {
    const message = validate.validateName('');
    assert.equal(message, 'You need to enter your name');
    done();
  });

  it('should return true with email', (done) => {
    const message = validate.validateEmail('hi@felipefialho.com');
    assert.equal(message, true);
    done();
  });

  it('should return an error without email', (done) => {
    const message = validate.validateEmail('');
    assert.equal(message, 'You need to enter your email');
    done();
  });

  it('should return true with GitHub username', (done) => {
    const message = validate.validateGitHub('LFeh');
    assert.equal(message, true);
    done();
  });

  it('should return an error without GitHub username', (done) => {
    const message = validate.validateGitHub('');
    assert.equal(message, 'You need to enter your GitHub username');
    done();
  });

  it('should return true with Twitter username', (done) => {
    const message = validate.validateTwitter('LFeh');
    assert.equal(message, true);
    done();
  });

  it('should return an error without Twitter username', (done) => {
    const message = validate.validateTwitter('');
    assert.equal(message, 'You need to enter your Twitter username');
    done();
  });
});

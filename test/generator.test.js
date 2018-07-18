const assert = require('yeoman-assert');
const test = require('yeoman-test');
const path = require('path');

const files = require('../generators/app/files');

describe('Generator Tests', () => {
  beforeAll((done) => {
    test
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        project: 'awesome-project',
        description: 'An awesome project',
        name: 'Felipe Fialho',
        email: 'hi@felipefialho.com',
        github: 'LFeh',
        twitter: 'LFeh'
      })
      .on('end', done);
  });

  it('should create a project', (done) => {
    files.forEach((file) => {
      assert.file(file.destination);
    });

    done();
  });
});

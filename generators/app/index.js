const Generator = require('yeoman-generator');

const files = require('./files');
const validate = require('./validate');

module.exports = class extends Generator {
  initializing() {
    this.log('Kratos Boilerplate Generator');
    this.log('❤️  Made with love by Felipe Fialho');
    this.log();
  }

  prompting() {
    const done = this.async();

    const prompts = [
      {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
        default: 'awesome-project'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        default: 'An awesome project'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: validate.validateName,
        store: true
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: validate.validateEmail,
        store: true
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: validate.validateGitHub,
        store: true
      },
      {
        type: 'input',
        name: 'twitter',
        message: 'What is your Twitter username?',
        validate: validate.validateTwitter,
        store: true
      }
    ];

    this.prompt(prompts).then((props) => {
      this.props = props;
      done();
    });
  }

  writing() {
    this.log();
    this.log('🚀  Generating boilerplate...');
    this.log();

    const { project, description, name, email, github, twitter } = this.props;

    const templates = {
      project,
      description,
      name,
      email,
      github,
      twitter,
      year: new Date().getFullYear()
    };

    files.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file.template),
        this.destinationPath(file.destination),
        templates
      );
    });
  }

  install() {
    this.log();
    this.log('📦  Installing dependencies...');
    this.log();

    this.npmInstall(
      [
        '@babel/core',
        '@babel/preset-env',
        'autoprefixer',
        'babel-core',
        'babel-loader',
        'babel-preset-env',
        'clean-webpack-plugin',
        'copy-webpack-plugin',
        'css-loader',
        'cssnano',
        'eslint',
        'file-loader',
        'gh-pages-deploy',
        'html-webpack-plugin',
        'husky',
        'imagemin-webpack-plugin',
        'lost',
        'mini-css-extract-plugin',
        'node-sass',
        'offline-plugin',
        "postcss",
        'postcss-font-magician',
        'postcss-loader',
        'postcss-modules',
        'pug',
        'pug-loader',
        'rucksack-css',
        'rupture-sass',
        'sass-lint',
        'sass-loader',
        'style-loader',
        'uglifyjs-webpack-plugin',
        'webpack',
        'webpack-bundle-analyzer',
        'webpack-cli',
        'webpack-dev-server',
        'webpack-pwa-manifest'
      ],
      { 'save-dev': true }
    );
  }

  end() {
    this.log();
    this.log('🎉  Successfully generated!');
  }
};

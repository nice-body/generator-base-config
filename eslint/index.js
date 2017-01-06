const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.composeWith(require.resolve('../npm'));
  }

  writing() {
    this.fs.copy(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'));
  }

  install() {
    this.npmInstall(['eslint', 'eslint-config-airbnb-base', 'eslint-plugin-import'], { 'save-dev': true, registry: 'https://registry.npm.taobao.org' });
  }
};

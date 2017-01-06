const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.composeWith(require.resolve('../npm'));
  }
  writing() {
    this.fs.copy(this.templatePath('.stylelintrc'), this.destinationPath('.stylelintrc'));
  }

  install() {
    this.npmInstall(['stylelint', 'stylelint-config-standard'], { 'save-dev': true, registry: 'https://registry.npm.taobao.org'});
  }
};

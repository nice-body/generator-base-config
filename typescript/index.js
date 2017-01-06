const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.composeWith(require.resolve('../npm'));
  }
  writing() {
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
  }

  install() {
    this.npmInstall(['typescript'], { 'save-dev': true, registry: 'https://registry.npm.taobao.org'});
  }
};

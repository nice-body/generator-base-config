const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.composeWith(require.resolve('../npm'));
  }
  writing() {
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
  }

  install() {
    this.npmInstall(['tslint'], { 'save-dev': true, registry: 'https://registry.npm.taobao.org'});
  }
};

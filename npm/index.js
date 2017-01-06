const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  configuring() {
    if (!this.fs.exists(this.destinationPath('package.json'))) {
      this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    }
  }
};

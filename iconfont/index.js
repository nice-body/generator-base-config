const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath('font.css'), this.destinationPath('./css/font.css'));
  }
};

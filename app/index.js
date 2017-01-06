const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.composeWith(require.resolve('../editorconfig'));
    this.composeWith(require.resolve('../eslint'));
    this.composeWith(require.resolve('../gitignore'));
    this.composeWith(require.resolve('../stylelint'));
  }

  end() {
    this.log('all completed!');
  }
};

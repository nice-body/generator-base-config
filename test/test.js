const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('base-config', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'));
  });

  it('应该生成 editorconfig 的配置文件', function () {
    assert.file('.editorconfig');
  });

  it('应该生成 package.json 文件', function () {
    assert.file('package.json');
  });

  it('应该生成 eslint 的配置文件', function () {
    assert.file('.eslintrc');
  });

  it('应该生成 gitignore 的配置文件', function () {
    assert.file('.gitignore');
  });

  it('应该生成 stylelint 的配置文件', function () {
    assert.file('.stylelintrc');
  });
});

describe('base-config:editorconfig', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../editorconfig'));
  });

  it('生成 editorconfig 的配置文件', function () {
    assert.file('.editorconfig');
  });
});

describe('base-config:eslint', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../eslint'));
  });

  it('应该生成 eslint 的配置文件', function () {
    assert.file('.eslintrc');
  });
});

describe('base-config:gitignore', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../gitignore'));
  });

  it('应该生成 .gitignore 文件', function () {
    assert.file('.gitignore');
  });
});

describe('base-config:iconfont', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../iconfont'));
  });

  it('应该生成 iconfont 相关的文件', function () {
    assert.file('./css/font.css');
  });
});

describe('base-config:npm', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../npm'));
  });

  it('应该生成 npm 的配置文件', function () {
    assert.file('package.json');
  });
});

describe('base-config:stylelint', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../stylelint'));
  });

  it('应该生成 stylelint 的配置文件', function () {
    assert.file('.stylelintrc');
  });
});

describe('base-config:tslint', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../tslint'));
  });

  it('应该生成 tslint 的配置文件', function () {
    assert.file('tslint.json');
  });
});

describe('base-config:typescript', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../typescript'));
  });

  it('应该生成 typescript 的配置文件', function () {
    assert.file('tsconfig.json');
  });
});

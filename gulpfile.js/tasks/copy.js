'use strict';

const { paths: { desination }, vendor } = require('../settings');
const { src, dest } = require('gulp');

// Копирование вендорных JS файлов
const copy = done => {
  if (vendor.scripts.length != 0) {
    src(vendor.scripts)
      .pipe(dest(desination.scripts));
  }

  done();
};

module.exports = copy;

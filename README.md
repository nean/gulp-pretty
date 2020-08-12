## @nean/gulp-pretty

This plugin uses https://github.com/jonschlinkert/pretty to format html

## Install

```sh
npm i @nean/gulp-pretty
```

## Usage 

```js
const gulp = require('gulp');
const pretty = require('@nean/gulp-pretty');

gulp.task('templates', () => {
    return gulp.src('templates/**/*.html')
        .pipe(pretty({ocd: true}))
        .pipe(gulp.dest('dist'));
});

```
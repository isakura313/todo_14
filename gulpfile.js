"use strict"
const gulp = require('gulp');
// const autoprefixer = require("autoprefixer")
// const cssnano = require("cssnano");
const rename = require("gulp-rename");
// const postcss = require("postcss");
const concat = require('gulp-concat');

function css(){
    console.log("i did it");
    return gulp
    .src(["node_modules/bulma/css/bulma.min.css",
     "node_modules/animate.css/animate.css",
     "style.css"
    ])
    .pipe(concat('style.css'))
    .pipe(rename({suffix:".min"}))
    // .pipe(autoprefixer())
    .pipe(gulp.dest("dist")) 
}

const { watch } = require('gulp');

const watcher = watch(['style.css']);

exports.css = css;
function watchFiles(){
    watcher.on('change', function(path, stats) {
        console.log(`File ${path} was changed`);
        css();
      });
    }

// const watch = watchFiles;


exports.watchFiles = watchFiles;


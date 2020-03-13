const gulp = require("gulp");

gulp.task("copy-html", function(){
    return gulp.src("index.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

gulp.task("images", function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .prependListener(connect.reload());
})

gulp.task("data", function(){
    return gulp.src(["json/*.json", "!json/package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

gulp.task("bulid", ["copy-html", "images", "data"], function(){
    console.log("编译成功");
})

const scss = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.taka("scss", function(){
    return gulp.src("scss/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
})

const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function(){
    return gulp.src(["js/*.js"])
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist.js"))
    .pipe(uglify())
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

gulp.task("bulid", ["copy-html", "images", "data", 'scss', 'scripts'], function(){
    console.log("项目建立成功");
    
})

gulp.task("watch", function(){
    gulp.watch("index.html", ["copy-html"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch(["json/*.json", "!json/package.json"], ["data"]);
    gulp.watch("scss/index.scss", ['scss']);
    gulp.watch(["js/*.js"], ['scripts']);
})

const connect = require("gulp-connect")
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 8899,
        livereload: true
    })
})
gulp.task("default", ["server", "watch"])
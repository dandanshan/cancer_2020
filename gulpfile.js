var gulp = require('gulp');
var webserver = require('gulp-webserver');
var extend = require('gulp-html-extend');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var mincss = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var prefix = require('gulp-autoprefixer');

// file paths
var distPath = './dist';
var viewPath = { src: './src/views/**/*.html', dest: distPath + '/' };
var assetPath = { src: './src/assets/**/*', dest: distPath + '/assets' };
var sassPath = { src: './src/assets/sass/**/*.scss', dest: assetPath.dest + '/sass' };
var cssPath = { src: './src/assets/css/**/*.css', dest: assetPath.dest + '/css' };
var jsPath = { src: './src/assets/js/**/*.js', dest: assetPath.dest + '/js' };
var imgPath = { src: './src/assets/images/**/*', dest: assetPath.dest + '/images' };

gulp.task('default', [
    'webserver',
    'watch',
    'extend',
    'sass',
    'uglify',
    'assets-deploy',
]);

// webserver
gulp.task('webserver', function() {
    gulp.src(distPath)
        .pipe(webserver({
            port: 1234,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});

// gulp-html-extend
gulp.task('extend', function() {
    gulp.src(viewPath.src)
        .pipe(extend({ annotations: true, verbose: false })) // default options
        .pipe(gulp.dest(viewPath.dest))
});

// sass
gulp.task('sass', function() {
    return gulp.src(sassPath.src)

    // output non-minified CSS file
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'expanded',
        sourceComments: false
    }).on('error', sass.logError))
    .pipe(prefix({
        cascade: false
    }))
    .pipe(gulp.dest(cssPath.dest))

    // output the minified version
    .pipe(mincss({
        rebase: false
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(cssPath.dest));
});

// js uglify
gulp.task('uglify', function() {
    gulp.src(jsPath.src)
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(jsPath.dest));
});

// assets-deploy
gulp.task('assets-deploy', function() {
    gulp.src((cssPath.src))
      .pipe(gulp.dest(cssPath.dest));
    gulp.src((jsPath.src))
      .pipe(gulp.dest(jsPath.dest));
    gulp.src((imgPath.src))
      .pipe(gulp.dest(imgPath.dest));
});

// watch
gulp.task('watch', function() {
    gulp.watch(viewPath.src, ['extend']);
    gulp.watch(sassPath.src, ['sass']);
    gulp.watch(jsPath.src, ['uglify']);
    gulp.watch(assetPath.src, ['assets-deploy']);
});


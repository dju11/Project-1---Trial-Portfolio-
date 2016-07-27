var gulp = require('gulp');

// gulp.task('task-name, function() {
	//return gulp.src('source files')
		//.pipe(aGulpPlugin()) sends it through a gulp plugin
		//.pipe(gulp.dest('destination')) outputs the file in the destination

// }); 

//gulp watch syntax
//     - gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 

		//e.g. - gulp.watch('app/scss/**/*.scss', ['sass']); 
		// add other watchers below this 


// for browser sync 
// 	gulp.task('sass', function() { 
// 		return gulp.src('app/scss/**/*.scss') //get all sass files
// 	.pipe(sass())
// 	.pipe(gulp.dest('app/css'))
// 	.pipe(browserSync.reload({
// 		stream: true
// 	}))
// }); 

// Image Optimization --------------------------------------------------------------------------------
// var imagemin = require('gulp-imagemin'); 

// gulp.task('imagemin', function(){
// 	return gulp.src('/images/Hiking%20Hunger%20.jpg')
// 	.pipe(imagemin({
// 		//setting interlaced to true
// 		interlaced: true
// 		progressive: true
// 	}))
// 	.pipe(gulp.dest('/dist'))

// });



gulp.task('imagemin', function(){
  return gulp.src('/images/**/*.jpg')
  .pipe(imagemin())
  .pipe(gulp.dest('/dist'));
});



// THE SMUSHIT PLUGIN CODE -------------------------------------------------------

// var smushit = require('gulp-smushit');

// gulp.task('smushit', function () {
//     return gulp.src('images/*')
//         .pipe(smushit({
//             verbose: true
//         }))
//         .pipe(smushit().on('error', function(e){
//             console.log(e);
//          }))
//         .pipe(gulp.dest('dist'));
// });


// .pipe(smushit().on('error', function(e){
//             console.log(e);
//          }))



// THE JPEG TRANS PLUGIN FUNCTION HERE -------------------------------------------------------

 var imagemin = require('gulp-imagemin');
const imageminJpegtran = require('imagemin-jpegtran');

imagemin(['images/*.jpg'], 'Project 1 - Trial Portfolio/images', {use: [imageminJpegtran()]}).then(() => {
    console.log('Images optimized');
});











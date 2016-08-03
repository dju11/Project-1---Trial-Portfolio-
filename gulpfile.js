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
//   return gulp.src('/images/**/*.jpg')
//   .pipe(imagemin())
//   .pipe(gulp.dest('/dist'));
// });



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




var imagemin = require('gulp-imagemin');

// CODE TO USE AUTOPREFIXER ON THE CSS SINCE FLEXBOX NOT WORKING IN SAFARI 

var autoprefixer = require("gulp-autoprefixer"); 
var sass = require('gulp-sass');





gulp.task('styles', function() {

	return gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./dist'))
}); 


gulp.task('imagemin', function(){
	return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(imagemin({
		//setting interlaced to true
		// interlaced: true
		progressive: true
	}))
	.pipe(gulp.dest('./dist'))

});


gulp.task('images', function(){
  return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(imagemin({
      // Setting interlaced to true
      interlaced: true
    }))
  .pipe(gulp.dest('dist/images'))
});
// gulp.task('runprefixer', function(){
// 	return gulp.src('/css/**/*.css')
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions']
// 		}))
// 		.pipe(gulp.dest('/dist'));
// });








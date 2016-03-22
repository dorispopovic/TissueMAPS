var argv = require('yargs').argv;

module.exports = function(gulp, $) {
    'use strict';

    var runSequence = require('run-sequence');

    // Clean old build files
    gulp.task('build', function() {
        return runSequence(
            'clean',
            // 'compile-ol-debug',
            ['make-script', 'make-style'], 
            'copy'
        );
    });

};

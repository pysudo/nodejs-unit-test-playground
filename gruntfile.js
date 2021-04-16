'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        mochaTest: {
            options: {
                reporter: 'spec',
                captureFile: 'results.txt', // Optionally capture the reporter output to a file
                quiet: false, // Optionally suppress output to standard out (defaults to false)
                noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
            },
            src: ["test/**/*.js"]
        },
        watch: {
            scripts: {
                files: ["**/*.js"],
                tasks: ["mochaTest"],
            }
        }
    });

    grunt.registerTask('default', 'watch');
}

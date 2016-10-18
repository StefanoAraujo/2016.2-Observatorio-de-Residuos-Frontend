// Karma configuration
// Generated on Sat Oct 08 2016 20:38:28 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [ 'www/lib/ionic/js/ionic.bundle.js',
	     'https://www.gstatic.com/firebasejs/3.5.0/firebase.js',
	     'www/lib/firebase/firebaseInitialConfigurator.js', 
	     'www/lib/angular-resource/angular-resource.js',
             'www/lib/ng-cordova/ng-cordova.min.js',
	     'www/lib/angular-resource/angular-mocks.js',
	     'www/lib/ngmap/build/scripts/ng-map.min.js',
             'www/lib/crypto-js/*.js',
	     'https://maps.googleapis.com/maps/api/js?key=AIzaSyASY7L520_jRca_Ecr7Rvki2P28qvo-ZXE',
	     'www/js/*.js',
	     'www/js/**/*.js',
	     'tests/unit-tests/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
	'www/js/*.js':['coverage'],
	'www/js/**/*.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],
    
    coverageReporter:{
	type: 'lcov',
	dir: 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

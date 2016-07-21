module.exports = function (karma) {
	karma.set({
		frameworks: ['jasmine', 'browserify'],

		files: [
			'../../Views/**/*.test.js'
		],

		reporters: ['progress', 'testng'],

		testngReporter: {
			outputFile: '../../testing-results.xml',
			suite: ''
		},

		preprocessors: {
			'../../Views/**/*.test.js': ['browserify']
		},

		browsers: ['PhantomJS', 'Chrome', 'Firefox'],

		logLevel: 'INFO',

		singleRun: true,
		autoWatch: false,
		colors: true,

		// browserify configuration
		browserify: {
			transform: [["babelify", {presets: ['es2015']}]],
			plugin: ['proxyquireify/plugin']
		}
	});
};

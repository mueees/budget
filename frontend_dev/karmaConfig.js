module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine', 'requirejs'],
        autoWatch: "true",
        browsers: [
            'Chrome'
        ],
        colors: true,

        preprocessors: {},

        files: [

            {pattern: 'sections/**/*.js', included: false},
            {pattern: 'libs/**/*.js', included: false},
            {pattern: 'plugins/**/*.js', included: false},
            {pattern: 'application/**/*.js', included: false},
            {pattern: 'test/base-report/table-module/**/*.spec.js', included: false},

            {pattern: 'sections/**/*.html', included: false},
            {pattern: 'plugins/**/*.html', included: false},
            {pattern: 'test/**/*.html', included: false},

            'test-main.js'
        ],
        exclude: []

    });
};
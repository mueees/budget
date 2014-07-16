module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var configPath = {
        public_temp_web: 'public',
        public_web: './server',

        public_temp_mobile: 'www',
        public_mobile: './mobile',

        dev: 'frontend_dev'
    };


    // Project configuration.
    grunt.initConfig({

        configPath: configPath,

        clean: {
            public_temp_web: '<%= configPath.public_temp_web %>',
            public_temp_mobile: '<%= configPath.public_temp_mobile %>'
        },

        copy: {
            web: {
                files: [
                    {expand: true, src: ['<%= configPath.dev %>' + '/css/style.css'], dest: '<%= configPath.public_temp_web %>', flatten: true}
                ]
            },

            web_finish: {
                files: [
                    {expand: true, src: ['<%= configPath.public_temp_web %>' + '/**'], dest: '<%= configPath.public_web %>'}
                ]
            },

            mobile: {
                files: [
                    {expand: true, src: ['<%= configPath.dev %>' + '/css/style.css'], dest: '<%= configPath.public_temp_mobile %>', flatten: true}
                ]
            },

            mobile_finish: {
                files: [
                    {expand: true, src: ['<%= configPath.public_temp_mobile %>' + '/**'], dest: '<%= configPath.public_mobile %>'}
                ]
            }
        },

        // Configuration to be run (and then tested).
        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    '<%= configPath.dev %>/css/style.css': '<%= configPath.dev %>/css/stylus/style.styl'
                }
            }
        },

        watch: {
            all: {
                tasks: ['build_all'],
                files: [
                    '<%= configPath.dev %>'+'/css/stylus/*.styl',
                    '<%= configPath.dev %>/js/**/*.js',
                    '<%= configPath.dev %>/js/**/*.html',
                    '<%= configPath.dev %>/index.html'
                ]
            },

            web: {
                tasks: ['build_web'],
                files: [
                    '<%= configPath.dev %>'+'/css/stylus/*.styl',
                    '<%= configPath.dev %>/js/**/*.js',
                    '<%= configPath.dev %>/js/**/*.html',
                    '<%= configPath.dev %>/index.html'
                ]
            },

            mobile: {
                tasks: ['build_mobile'],
                files: [
                    '<%= configPath.dev %>'+'/css/stylus/*.styl',
                    '<%= configPath.dev %>/js/**/*.js',
                    '<%= configPath.dev %>/js/**/*.html',
                    '<%= configPath.dev %>/index.html'
                ]
            }
        },

        requirejs: {
            web: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "./frontend_dev/js/apps/web.js",
                    out: '<%= configPath.public_temp_web %>' + "/script.js",
                    optimize: "none"
                }
            },

            mobile: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "./frontend_dev/js/apps/mobile.js",
                    out: '<%= configPath.public_temp_mobile %>' + "/script.js",
                    optimize: "none"
                }
            }
        }

    });

    // By default, lint and run all tests.
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build_web', [
        'stylus',
        'clean:public_temp_web',
        'requirejs:web',
        'copy:web',
        'copy:web_finish',
        'clean:public_temp_web'
    ]);

    grunt.registerTask('build_mobile', [
        'stylus',
        'clean:public_temp_mobile',
        'requirejs:mobile',
        'copy:mobile',
        'copy:mobile_finish',
        'clean:public_temp_mobile'
    ]);

    grunt.registerTask('build_all', [
        'build_web',
        'build_mobile'
    ]);

};
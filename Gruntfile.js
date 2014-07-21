module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var configPath = {
        public_temp_web: 'public',
        public_web: './server',

        public_temp_mobile: 'www',
        public_mobile: './mobile',

        dev: 'server/frontend_dev'
    };

    // Project configuration.
    grunt.initConfig({

        configPath: configPath,

        concat: {
            options: {},
            dist: {
                src: [
                        '<%= configPath.dev %>' + '/css/vendor/bootstrap/css/bootstrap.min.css',
                        '<%= configPath.dev %>' + '/css/vendor/bootstrap/css/superhero.css',
                        '<%= configPath.dev %>' + '/css/import/animate.css',
                        '<%= configPath.dev %>' + '/css/style.css'
                ],
                dest: '<%= configPath.dev %>' + '/css/style.css'
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
            develop: {
                tasks: ['develop'],
                files: [
                        '<%= configPath.dev %>'+'/css/stylus/*.styl'
                ]
            }
        }

    });

    // By default, lint and run all tests.
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('develop', [
        'stylus',
        'concat'
    ]);

};
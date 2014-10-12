module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var configPath = {
        public_web: 'server/public',
        public_mobile: 'mobile/www',
        dev: 'frontend_dev'
    };

    // Project configuration.
    grunt.initConfig({

        configPath: configPath,

        clean: {
            public_web: '<%= configPath.public_web %>',
            public_mobile: '<%= configPath.public_mobile %>'
        },

        copy: {
            web: {
                files: [
                    {expand: true, src: ['<%= configPath.dev %>' + '/fonts'], dest: '<%= configPath.public_web %>', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/fonts/*'], dest: '<%= configPath.public_web %>/fonts', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/img'], dest: '<%= configPath.public_web %>', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/img/*'], dest: '<%= configPath.public_web %>/img', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/css'], dest: '<%= configPath.public_web %>', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/css/style.css'], dest: '<%= configPath.public_web %>/css', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/js/vendor/libs/require/require.js'], dest: '<%= configPath.public_web %>/js', flatten: true},
                ]
            },

            mobile: {
                files: [
                    {expand: true, src: ['<%= configPath.dev %>' + '/fonts'], dest: '<%= configPath.public_mobile %>', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/mobile/index.html'], dest: '<%= configPath.public_mobile %>', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/fonts/*'], dest: '<%= configPath.public_mobile %>/fonts', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/img'], dest: '<%= configPath.public_mobile %>', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/img/*'], dest: '<%= configPath.public_mobile %>/img', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/css'], dest: '<%= configPath.public_mobile %>', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/css/style.css'], dest: '<%= configPath.public_mobile %>/css', flatten: true},
                    {expand: true, src: ['<%= configPath.dev %>' + '/js/vendor/libs/require/require.js'], dest: '<%= configPath.public_mobile %>/js', flatten: true},
                ]
            }

        },

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

        requirejs: {
            web: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "./frontend_dev/js/apps/web.js",
                    out: '<%= configPath.public_web %>' + "/js/script.js",
                    optimize: "none"
                }
            },
            mobile: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "./frontend_dev/js/apps/mobile.js",
                    out: '<%= configPath.public_mobile %>' + "/js/script.js",
                    optimize: "none"
                }
            }
        },

        //for Ripple development
        exec:{
            run:{
                command:"cd ./mobile; cordova run android",
                stdout:true,
                stderror:true
            }
        },

        watch: {

            develop: {
                tasks: ['develop'],
                files: [
                        '<%= configPath.dev %>'+'/css/stylus/*.styl'
                ]
            },

            mobile: {
                tasks: ['production:mobile'],
                files: [
                        '<%= configPath.dev %>'+'/js/*.js'
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

    grunt.registerTask('md', [
        'production:mobile',
        'exec:run'
    ]);



    grunt.registerTask('production:web', [
        'clean:public_web',
        'stylus',
        'concat',
        'requirejs:web',
        'copy:web'
    ]);

    grunt.registerTask('production:mobile', [
        'clean:public_mobile',
        'stylus',
        'concat',
        'requirejs:mobile',
        'copy:mobile'
    ]);

    grunt.registerTask('production', [
        'production:web',
        'production:mobile'
    ])

};
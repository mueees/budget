module.exports = function(grunt) {


    /*var karmaConfig = function(configFile, customOptions) {
        var options = {
            configFile: configFile,
            keepalive: true
        };
        var travisOptions = process.env.TRAVIS && { browsers: ['Firefox'], reporters: 'dots' };
        return grunt.util._.extend(options, customOptions, travisOptions);
    };*/

    grunt.initConfig({

        stylus : {
            compile : {
                files : {
                    'css/style.css' : 'css/stylus/style.styl',
                    'sections/dashboard/pie.chart.module/css/style.css' : 'sections/dashboard/pie.chart.module/css/style.styl',
                    'sections/dashboard/topCountry.chart.module/css/style.css' : 'sections/dashboard/topCountry.chart.module/css/style.styl',
                    'sections/dashboard/medianInterval.chart.module/css/style.css' : 'sections/dashboard/medianInterval.chart.module/css/style.styl',
                    'sections/dashboard/medianDuration.chart.module/css/style.css' : 'sections/dashboard/medianDuration.chart.module/css/style.styl',
                    'sections/dashboard/line.chart.module/css/style.css' : 'sections/dashboard/line.chart.module/css/style.styl',
                    'sections/dashboard/lineOsVers.chart.module/css/style.css' : 'sections/dashboard/lineOsVers.chart.module/css/style.styl',
                    'sections/dashboard/new.widget.module/css/style.css' : 'sections/dashboard/new.widget.module/css/style.styl',
                    'sections/base-report/chart-module/css/style.css' : 'sections/base-report/chart-module/css/style.styl',
                    'sections/base-report/table-module/css/style.css' : 'sections/base-report/table-module/css/style.styl',
                    'sections/base-report/filters-module/css/style.css' : 'sections/base-report/filters-module/css/style.styl',
                    'sections/headerFilter/css/style.css' : 'sections/headerFilter/css/style.styl',
                    'sections/sidebar-menu/css/style.css' : 'sections/sidebar-menu/css/style.styl',
                    'css/style_promo-page.css' : 'css/promo-page/stylus/style.styl',
                    'css/htmlError-page/style.css' : 'css/htmlError-page/stylus/style.styl'
                },
                options: {
                    paths: ['css/import']
                }
            }
        },

        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: [
                    'libs/bootstrap/css/bootstrap.min.css',
                    'plugins/jquery.datepicker/datepicker.css',
                    'plugins/mCustomScrollbar/jquery.mCustomScrollbar.css',

                    'css/style.css',
                    'css/sprite.css',
                    'css/animate.css',

                    'sections/sidebar-menu/css/style.css',
                    'sections/headerFilter/css/style.css',
                    'sections/base-report/chart-module/css/style.css',
                    'sections/base-report/table-module/css/style.css',
                    'sections/base-report/filters-module/css/style.css',
                    'libs/morris/css/morris.css',

                    'sections/dashboard/pie.chart.module/css/style.css',
                    'sections/dashboard/line.chart.module/css/style.css',
                    'sections/dashboard/lineOsVers.chart.module/css/style.css',
                    'sections/dashboard/topCountry.chart.module/css/style.css',
                    'sections/dashboard/medianInterval.chart.module/css/style.css',
                    'sections/dashboard/medianDuration.chart.module/css/style.css',
                    'sections/dashboard/new.widget.module/css/style.css',

                    'css/htmlError-page/style.css'

                ],
                dest: 'css/style_prod.css'
            }
        },

        watch : {
            scripts : {
            	tasks: ['stylus', 'concat'],
                files : [
                    'css/import/*styl',
                    'css/stylus/*.styl',
                    'css/promo-page/stylus/*.styl',
                    'css/htmlError-page/stylus/*.styl',
                    'sections/dashboard/pie.chart.module/css/*.styl',
                    'sections/dashboard/line.chart.module/css/*.styl',
                    'sections/dashboard/lineOsVers.chart.module/css/*.styl',
                    'sections/dashboard/topCountry.chart.module/css/*.styl',
                    'sections/dashboard/medianInterval.chart.module/css/*.styl',
                    'sections/dashboard/medianDuration.chart.module/css/*.styl',
                    'sections/base-report/chart-module/css/style.styl',
					'sections/base-report/table-module/css/style.styl',
					'sections/base-report/filters-module/css/style.styl',
					'sections/headerFilter/css/style.styl',
					'sections/sidebar-menu/css/style.styl',
                    'sections/dashboard/new.widget.module/css/*.styl',
                    'css/sprite.css'
				]
            }
        },

        requirejs: {
            reports: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "js_marionette/apps/analytics/main.js",
                    out: "toDeploy/reports.js"
                }
            },
            projects: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "js_marionette/apps/projects/main.js",
                    out: "toDeploy/product.js"
                }
            },
            conversion: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "js_marionette/apps/conversion/main.js",
                    out: "toDeploy/conversion.js"
                }
            },
            settings: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "js_marionette/apps/settings/main.js",
                    out: "toDeploy/settings.js"
                }
            }
        }
    })
    //grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    /*don't use*/
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Задача по умолчанию
    grunt.registerTask('default', ['watch'])
    grunt.registerTask('production', ['stylus', 'concat', 'requirejs']);
    grunt.registerTask('karmat', ['karma:unit'])

};
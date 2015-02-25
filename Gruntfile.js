module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        imagePath: 'src/img',
        sourcePath: 'src',
        clean: {
            all: ['dst']
        },
        concurrent: {
            dev: {
                tasks: ['connect', 'watch:all']
            }

        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dst/css/app.css': 'src/scss/app.scss'
                }
            }
        },
        mkdir: {
            all: {
                options: {
                    create: ['dst/img', 'dst/css', 'dst/js']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: 'src/scss/**/*.scss',
                tasks: ['sass']
            },
            all: {
                files: ['src/scss/**/*.scss', 'src/**/*.html', 'src/js/**/*.js'],
                tasks: ['copy', 'sass', 'use']
            }
        },
        copy: {
            main: {
                cwd: 'src/',
                dest: 'dst',
                expand: true,
                src: ['**/*.html', 'img/**/*.{jpg,png,gif,svg}', 'js/**/*.js']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    base: 'dst',
                    keepalive: true,
                    livereload: true
                }
            }
        },
        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dst',
                root: 'src',
                flow: {
                    steps: {
                        'js': ['concat'],
                        'css': ['concat']
                    },
                    post: []
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            }
        },
        usemin: {
            html: 'dst/index.html',
            options: {}
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('setup', ['clean', 'mkdir', 'copy', 'use', 'sass']);
    grunt.registerTask('default', ['devServer']);
    grunt.registerTask('use', ['useminPrepare', 'concat', 'usemin']);
    grunt.registerTask('devServer', ['setup', 'concurrent:dev']);


};
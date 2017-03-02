module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dist: {
                src: ["dist/"]
            }
        },

        less: {
            dist: {
                files: {
                    "dist/theme.css": "less/jenkins-aoe-theme.less"
                }
            }
        },

        imageEmbed: {
            theme: {
                src: ["dist/theme.css"],
                dest: "dist/theme.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },

        cssmin: {
            minify: {
                files: {
                    'dist/theme.css': ['dist/theme.css']
                }
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{removeViewBox: true}]
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.svg'],
                    dest: 'images/'
                }]
            }

        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'dist/theme.css'
            }
        }
    });

    grunt.registerTask('default', ['clean', 'less', 'imagemin', 'imageEmbed', 'cssmin', 'postcss']);
};
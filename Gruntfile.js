module.exports = function (grunt) {
  grunt.initConfig({
    babel: {
      options: {
        presets: ['env']
      },
      dist: {
        files: {
          'dist/toggle-switch.js': 'src/index.js'
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'expanded'
        },
        files: {
          'dist/toggle-switch.css': 'src/style.sass'
        }
      }
    },
    umd: {
      all: {
        options: {
          src: 'dist/toggle-switch.js',
        }
      }
    }
    // copy: {
    //     main: {
    //         expand: true,
    //         cwd: 'src/',
    //         src: '**',
    //         dest: 'build/',
    //         flatten: true,
    //         filter: 'isFile'
    //     }
    // },
    // eslint: {
    //     options: {
    //         configFile: '.eslintrc.js'
    //     },
    //     target: [
    //         'src/js/*.js',
    //         'tests/**/*.js',
    //         '!tests/coverage/html/*.js'
    //     ]
    // },
    // uglify: {
    //     build: {
    //         src: 'src/js/cropbox.js',
    //         dest: 'build/cropbox.min.js'
    //     }
    // },
    // cssnano: {
    //     dist: {
    //         files: {
    //             'build/cropbox.min.css': 'src/css/cropbox.css'
    //         }
    //     }
    // },
    // karma: {
    //     options: {
    //         configFile: 'karma.conf.js'
    //     },
    //     dev: {},
    //     ci: {
    //         reporters: ['progress', 'coverage', 'coveralls']
    //     }
    // }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-umd');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-cssnano');
  // grunt.loadNpmTasks('grunt-eslint');
  // grunt.loadNpmTasks('grunt-karma');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  //
  grunt.registerTask('default', ['babel', 'sass', 'umd'/*, 'copy', 'karma:dev', 'eslint', 'uglify', 'cssnano'*/]);
};

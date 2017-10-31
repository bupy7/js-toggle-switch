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
          globalAlias: 'ToggleSwitch'
        }
      }
    },
    eslint: {
        options: {
            configFile: '.eslintrc.js'
        },
        target: [
            'src/**/*.js',
            // 'tests/**/*.js',
            // '!tests/coverage/html/*.js'
        ]
    },
    cssnano: {
      dist: {
        files: {
          'dist/toggle-switch.min.css': 'dist/toggle-switch.css'
        }
      }
    },
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
  grunt.loadNpmTasks('grunt-cssnano');
  grunt.loadNpmTasks('grunt-eslint');
  // grunt.loadNpmTasks('grunt-karma');
  //
  grunt.registerTask('default', ['babel', 'sass', 'umd', 'cssnano', 'eslint'/* 'karma:dev''*/]);
};

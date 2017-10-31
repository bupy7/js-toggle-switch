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
          template: 'umd/template.hbs',
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
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        src: 'dist/toggle-switch.js',
        dest: 'dist/toggle-switch.min.js'
      }
    },
    karma: {
        options: {
            configFile: 'karma.conf.js'
        },
        'without-coverage': {},
        default: {
            reporters: ['progress', 'coverage', 'coveralls']
        }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-umd');
  grunt.loadNpmTasks('grunt-cssnano');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', [
    'eslint',
    'babel',
    'sass',
    'umd',
    'uglify',
    'cssnano',
    'karma:without-coverage'
  ]);
};

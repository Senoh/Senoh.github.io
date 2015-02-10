module.exports = function(grunt) {
	grunt.initConfig({
  concat: {
    js: {
      src: ['js/project.js'],
      dest: 'build/js/scripts.js',
    },
    css: {
      src: ['css/main.css'],
      dest: 'build/css/styles.css',
    },
  },
  watch: {
    js: {
      files: ['js/**/*.js'],
      tasks: ['concat:js'],
    },
    css: {
      files: ['css/**/*.css'],
      tasks: ['concat:css'],
    },
    uglify: {
      files: ['build/js/*.js'],
      tasks: ['uglify:js'],
    },
    cssmin: {
      files: ['build/css/*.css'],
      tasks: ['cssmin:css'],
    },
    jade: {
      files: ['index.jade'],
      tasks: ['jade'],
    },
    sass: {
      files: ['sass/main.sass'],
      tasks: ['sass'],
    },
  },
  uglify: {
    js: {
      files: {
        'pageLoad/scripts.min.js': ['build/js/scripts.js']
      }
    }
  },
  cssmin: {
  	css: {
    	files: {
      	'pageLoad/styles.min.css': ['build/css/styles.css']
    	}
  	}
  },
  connect: {
    server: {
      options: {
        port: 9001,
        base: 'www-root'
      }
    }
  },
  jade: {
    compile: {
      options: {
        files: {
          "index.html": ["index.jade",]
        }
      }
    }
  },
  sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {                      
        'css/main.css': 'sass/main.sass'
      }
    }
  },
 });


  //Grunt Loads
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['jade', 'sass', 'concat', 'uglify', 'cssmin', 'watch']);
};
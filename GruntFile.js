module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
	  bower: {
	    files: ['bower.json'],
	    tasks: ['bower:dev'],
	    options: {
	      spawn: true,
	      interrupt: true,
	      reload: true,
	      livereload: true
	    },
	  }
	},
    bower: {
      dev: {
	    options: {
	    	install:true,
			layout: 'byComponent',
        	targetDir: 'public/libs',
			verbose: false,
			cleanTargetDir: false,
			cleanBowerDir: false,
			bowerOptions:{
				forceLatest:true
			}
	      }
	    }      
    }, 
    nodemon: {
	  dev: {
	    script: 'server.js',
	    options:{
	    	watch: ['server.js']
	    }
	  }
	},
	concurrent: {
	    nodeChanges: ['watch:bower', 'nodemon:dev'],
		options: {
			logConcurrentOutput: true
		}
	}
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['bower:dev','concurrent:nodeChanges',]);

};
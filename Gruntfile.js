module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['*.js'],
        tasks: ['start'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('start', function() {
    grunt.util.spawn({
      cmd: 'node',
      args: ['server.js']
    });
    grunt.task.run('watch');
  });

  grunt.registerTask('default', 'start');
};
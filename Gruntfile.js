module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/',
          keepalive: true
        }
      }
    },
    assemble: {
      options: { layout: 'page.hbs', layoutdir: './src/bonnet/layouts/', partials: './src/bonnet/partials/**/*.hbs' },
      //posts: { files: [{ cwd: './src/content/', dest: './dist/', expand: true, src: ['**/*.hbs', '!_pages/**/*.hbs'] }, { cwd: './src/content/_pages/', dest: './dist/', expand: true, src: '**/*.hbs' }] }
    },

    sass: {
      dist: {
        files: {
          './build/style/main.css': './src/style/main.scss'
        }
      }
    },

    uglify: {
     options: {
       banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
     },
     build: {
       //src: './src/<%= pkg.name %>.js',
       //dest: './build/<%= pkg.name %>.min.js'
       src : './src/**/*.js',
       dest : './build/build.js'
     }
   }

 });

 // load plugins in package.json
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['assemble','sass','uglify','connect']);

};

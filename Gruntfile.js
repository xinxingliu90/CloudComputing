module.exports = function(grunt){ 
    // load plugins
    [
        'grunt-contrib-jade',
    ].forEach(function (task){ 
        grunt.loadNpmTasks(task);
    });
    // configure plugins
    grunt.initConfig({
        jade: {
            compile: {
                options: {
                    compileDebug: false,
                    pretty: true,
                },
                files: [ {
                    cwd: "app/build/jade",
                    src: "**/*.jade",
                    dest: "app/views",
                    expand: true,
                    ext: ".html"
                } ]
            }
        },
    });
    // register tasks
    grunt.registerTask('default', ['jade']);
};
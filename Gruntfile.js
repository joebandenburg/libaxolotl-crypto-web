"use strict";

module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-karma");

    grunt.initConfig({
        jshint: {
            all: {
                src: ["Gruntfile.js", "axolotl-crypto.js", "test/**/*.js"],
                options: {
                    jshintrc: true
                }
            }
        },
        jscs: {
            all: {
                src: ["Gruntfile.js", "axolotl-crypto.js", "test/**/*.js"]
            }
        },
        karma: {
            unit: {
                configFile: "karma.conf.js"
            }
        }
    });

    grunt.registerTask("check", ["jshint", "jscs"]);
    grunt.registerTask("test", ["check", "karma"]);
    grunt.registerTask("default", ["test"]);
};

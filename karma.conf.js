module.exports = function(config) {
    config.set({
        frameworks: ["mocha", "chai"],

        files: [
            "bower_components/axolotl-crypto-curve25519/curve25519.js",
            "axolotl-crypto.js",
            "test/**/*.js"
        ],
        browsers: ["Firefox"],
        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
                ui: 'bdd'
            }
        },
        singleRun: true
    });
};
module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],

        karmaTypescriptConfig: {
            bundlerOptions: {
                exclude: ["slack-node", "nodemailer", "mailgun-js", "loggly", "hipchat-notifier"],
                sourceMap: true
            },
            coverageOptions: {
                instrumentation: false
            }
        },

        browsers: ["Chrome"]
    });
};

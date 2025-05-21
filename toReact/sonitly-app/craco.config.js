module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    path: require.resolve("path-browserify"),
                    // Add other polyfills if needed (e.g., "os", "crypto")
                },
            },
        },
    },
};


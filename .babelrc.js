module.exports = {
    presets: [
        ['@babel/preset-env', {
            loose: true,
            shippedProposals: true,
            modules: false,
            targets: {
              ie: 9,
            },
        }],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        [
            "css-modules-transform", {
                "preprocessCss": "./css-module-transform.js",
                "extensions": [".css", ".scss"],
                "extractCss": {
                    "dir": "./build/stylesheets/",
                    "relativeRoot": "./src/",
                    "filename": "[path]/[name].css"
                },
                // "extractCss": "./build/main.css"
            }
        ],
        // A plugin that enables the re-use of Babel's injected helper code to save on codesize.
        ['@babel/plugin-transform-runtime', {
            useESModules: true,
        }],
    ]
  };
  
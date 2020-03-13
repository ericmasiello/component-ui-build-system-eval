module.exports = {
    presets: [
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        [
            'css-modules-transform', {
                'preprocessCss': './css-module-transform.js',
                'extensions': ['.css', '.scss'],
                'extractCss': {
                    'dir': './build/stylesheets/',
                    'relativeRoot': './src/',
                    'filename': '[path]/[name].css'
                },
                // Note: Uncomment the below line and comment out above extractCss
                // if you want to create a single css bundle
                // 'extractCss': './build/main.css'
            }
        ],
        // A plugin that enables the re-use of Babel's injected helper code to save on codesize.
        ['@babel/plugin-transform-runtime', {
            useESModules: true,
        }],
    ],
    env: {
        modern: {
            presets: [
                '@babel/preset-modules'
            ]
        },
        legacy: {
            presets: [
                '@babel/preset-env'
            ]
        }
    }
  };
  
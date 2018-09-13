var path = require("path");

module.exports = {
    entry: {
        main: './wwwroot/src/javascript/test.js',
        test: './wwwroot/src/main.ts',

        app: './wwwroot/src/styles/app.component.css', 
        heros: './wwwroot/src/styles/heroes.component.css',
        herodetail: './wwwroot/src/styles/hero-detail.component.css'
    },

    output: {
        path: path.resolve(__dirname, './wwwroot/dist/scripts'),
        filename: '[name].bundle.js'
    }, 

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.sccs' ]
    },

    devtool: 'source-map',

    module: {
        rules:
            [
                {
                    
                    test: /\.tsx?$/,
                    use: "awesome-typescript-loader"
                
                },

                {
                    test: /\.css$/,
                    use:
                        [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].css',
                                    outputPath: '../styles/'
                                }
                            },

                            {
                                loader: 'extract-loader'
                            },

                            {
                                loader: "css-loader"
                            }
/*
                            {
                                loader: "sass-loader"
                            }
           */
                        ]
                }
            ]
    }
};
module.exports = {
    entry: ['@babel/polyfill','./src/main.js'],
    output:{
        //caminho do diretorio
        path: __dirname + '/public',
        //nome do arquivo para saida
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/public',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                },
            }
        ],
    },
};
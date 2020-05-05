module.exports = {
    entry: './src/js/script.js',           // Archivo de entrada
    output: {                              // Archivos de salida
        path: __dirname + '/dist',                // Ruta (por defecto)
        filename: 'bundle.js'           // Archivo de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      sassOptions: {
                        indentWidth: 4,
                        includePaths: ['absolute/path/a', 'absolute/path/b'],
                      },
                    },
                  },
                ],
              },
        ],
    },
}
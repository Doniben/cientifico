const path = require('path'); //path de node para acceder dentro de la carpeta
const HtmlWebpackPlugin = require('html-webpack-plugin'); //instalado 
const CopyWebpackPlugin = require('copy-webpack-plugin'); //para usar styles de css

//Crearemos un modulo para exportar con la configuración de lo que sucederá

module.exports = {
    entry: './src/index.js', //DE aquí partiremos al desarrollo que crearemos
    output: {
        path: path.resolve(__dirname, 'dist'), //decimos el path importado. Resolve nos dice donde se encuentra, dirname pone la carpeta
        filename: 'main.js' //así se llamará el compilado del proyecto se llamará main.js cuando esté listo para producción.
    },
    resolve: {
        extensions: ['.js'], //arreglo de las extensiones a utlizar, en este caso sólo .js
    },
    module: {
        rules: [ //Las reglas se crear conun arreglo y dentro de él los objetos que necesitamos
            { //La estructura de babel necesita un test
                test: /\.js?$/, //regex para establecer el punto de entrada + debe estar en extensiones .js + establecer cuáles elementos
                exclude: /node_modules/, //excluir la carpeta, archivos .js
                use: {
                    loader: 'babel-loader',//Establecer configuración elegida para lanzar la aplicación, el que instamos
                }
            }
        ]
    },
    //Uso de plugins para trabjar con los archivos html
    plugins: [
        new HtmlWebpackPlugin(//Ya instanciado en la parte superior del documento
            {
                inject: true, //inyectar valores en archivo html
                template: './public/index.html', //template base de html
                filename: './index.html', //enviamos el template a la carpeta de dist
            }
        ),
        new CopyWebpackPlugin([{
            from: './src/styles/styles.css',
            to: ''
        }]
        )
    ]

}
//  require cargar archivos de otros paquetes
// requiero el paqquete en esta constante
const HtmlWebPackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");


// archivo de configuración de webpack
module.exports = {

    mode : "development",

    output:{
        // limpiar carpeta dist y vuelve a generar
        clean: true
    },
    module: {

        // regla que hacer en cierto tipos de archivos o que haga ciertas ocasiones
        rules:[
            {
                //Es la condición que debe cumplir, se usan expresiones regulares
                // aplicar regla sin es un archivo de extensión html, la i va para maysucula y minuscula
                test: /\.html$/i,
                loader: "html-loader",
                options:{
                    // si en el html tuvieramos una imagen que se cargue no lo inicializa 
                    sources: false,
                    minimize: false,
                }
            },
            {//se aplica regla a archivos css
                test: /\.css$/i,
                //exlcuir archivo para que se ejecute el de abajo
                exclude: /styles.css$/,
                use: [ "style-loader", "css-loader"],
            },
            {
                //evaluar archivo en especifico global
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]

            },
            {
                //evaluar cualquier imagen sin imporatar donde este
                test: /\.(png|jpe?g°gif)$/i,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            limit: 8192,
                        }
                    },
                ],
                //al usar controladore antiguos antes de v5
                type: "javascript/auto"
                

            }

        ]
    },
    optimization: {},

    //Aquí se ejecuta la instancia que hemos creado antes para que copie el index html de la carpeta src a dist para cuando se suba a producción
    plugins: [

        // utilizar el plugina requerido
        new HtmlWebPackPlugin({
            title: "Mi Webpack App",

            // archivo a tomar
            template: "./src/index.html",

            // hacia donde colocar
            // filename: "./index.html"
        }),
        
        new MiniCssExtractPlugin({
            //no mantener en cache el archivo, cambia el nombre cuando se modifica archivo
            // filename: "[name].[fullhash].css",
            filename: "[name].css",
            ignoreOrder: false
        }),

        new CopyPlugin ({
            patterns: [
                {from: "src/assets", to: "assets/"},
            ],
        }),
    ]    
}
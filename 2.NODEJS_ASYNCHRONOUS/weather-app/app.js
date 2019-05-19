
//  Utilizamos yarg para definir las opciones, aqui trabajamos diferente que con comandos, ya que no requerimos comandos para usar las opciones 
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')
const yargs = require('yargs')
const argv = yargs
    .option({
        address: {
            describe: 'Address to fetch weather for',
            demand: true, // para que sea siempre necesario
            alias: 'a',
            string: true // para que lo evalue siempre como string
        }
    })
    .help()
    .alias('help','h') // para definir un alias a help
    .argv

console.log(argv)

//  Llamamos a la funcion geocodeAddress que recibe como argumentos la direccion ingresada por el usuario
//  y la funcion que se va a ejecutar cuando los datos sean obtenidos
//  la funcion callback recibe 2 parametros, el errorMessage y los resultados (direccion latitud y longitud) 
geocode.geocodeAddress(argv.address, (errorMessage, geocodeResults) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        //  Del objeto results que se devuelve en el callback que llama geocodeAddress, 
        //  se muestra sus propiedades address latitude y longitude
        console.log(geocodeResults.address)
        weather.getWeather(geocodeResults.latitude,geocodeResults.longitude,(errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage)
            } else {
                console.log(`It's currently ${weatherResults.temperature}, It feels like ${weatherResults.apparentTemperature}`)
                console.log()
            }
        })
    }
})





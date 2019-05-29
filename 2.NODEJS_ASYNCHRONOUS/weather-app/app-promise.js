
//  Utilizamos yarg para definir las opciones, aqui trabajamos diferente que con comandos, ya que no requerimos comandos para usar las opciones 
const geocode = require('./geocode/geocode-promise')
const weather = require('./weather/weather-promise')
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

// console.log(argv)

//  Llamamos a la funcion geocodeAddress que recibe como argumentos la direccion ingresada por el usuario

geocode.geocodeAddress(argv.address)
    .then(geocodeResults => {
    console.log(geocodeResults.address)
    return weather.getWeather(geocodeResults.latitude, geocodeResults.longitude)})
    .then(weatherResults => {
        console.log(`It's currently ${weatherResults.temperature}, It feels like ${weatherResults.apparentTemperature}`)})
    .catch(errorMessage => {
        console.log(errorMessage)})






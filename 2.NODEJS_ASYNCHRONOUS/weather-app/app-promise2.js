const axios = require('axios')
const API_KEY = 'AIzaSyAWU-XHRXXYKN8b4JjOcc315e6tSLr8gNU'
const API_KEY_DARKSKY = '7ed09689d34081b66da9cb66c54b4b19'
//  Utilizamos yarg para definir las opciones, aqui trabajamos diferente que con comandos, ya que no requerimos comandos para usar las opciones 
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

//  console.log(argv)

//  Definimos una direccion por default
if (argv.address) {
    var encodedAddress = encodeURIComponent(argv.address)
} else {
    var encodedAddress = encodeURIComponent('Avenida Canada 1290 la victoria lima peru')
}

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`

axios.get(geocodeUrl).then((response) => {
    //  Esta condicional evalua y personaliza un error de acuerdo sea el caso (status)
    if (response.data.status === 'ZERO_RESULTS') {
        //  creamos un nuevo error cuando el response.data.status === 'ZERO_RESULTS', para que sea tomado por el catch 
        throw new Error('Unable to find that address.')        
    }
    var latitude = response.data.results[0].geometry.location.lat
    var longitude = response.data.results[0].geometry.location.lng
    var weatherUrl = `https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}`
    console.log(response.data.results[0].formatted_address)
    
    return axios.get(weatherUrl)
    }).then((response) => {
        var temperature = response.data.currently.temperature
        var apparentTemperature = response.data.currently.apparentTemperature
        console.log(`It's currently ${temperature}, It feels like ${apparentTemperature}`)

}).catch((e) => { 
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API server.')
    } else {
        console.log(e.message)
    }

})


//  Definimos el API_KEY para consumir el API de Darksky
const API_KEY_DARKSKY = '7ed09689d34081b66da9cb66c54b4b19'

//  Cargamos los modulos
const request = require('request')

var getWeather = (latitude, longitude) => {
    
    return new Promise((resolve, reject) => {
    
        request({
            // indica lo que vamos a solicitar
            url: `https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}`,
            // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                })
            } else {
                reject('Unable to fetch weather.')
            }
        })
    })
}
module.exports = {
    getWeather
}

/* 
// Prueba de llamada de la funcion
getWeather(39.9396284, -75.18663959999999).then((weather) => {
    console.log(JSON.stringify(weather, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage)
})
*/
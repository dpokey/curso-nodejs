//  Definimos el API_KEY para consumir el API de Google
const API_KEY = 'AIzaSyAWU-XHRXXYKN8b4JjOcc315e6tSLr8gNU'

const request = require('request')

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodeAddress = encodeURIComponent(address)

        request({
            // indica lo que vamos a solicitar
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${API_KEY}`,
            // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
            json: true
        },(error, response, body) => {
            if (error) {
                reject('Unable to connect to Google Server')
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that Address')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })
    })
}

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
},(errorMessage) => {
    console.log(errorMessage)
})
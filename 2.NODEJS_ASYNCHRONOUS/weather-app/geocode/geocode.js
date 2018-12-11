//  Definimos el API_KEY para consumir el API de Google
const API_KEY = 'AIzaSyAWU-XHRXXYKN8b4JjOcc315e6tSLr8gNU'

//  Cargamos los modulos
const request = require('request')

var geocodeAddress = (address, callback) => {
    /*  ---- Coodificar y decodificar URI Component ---- */
    /*    
        encodeURIComponent('1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA')
        1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA

        decodeURIComponent('1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA')
        1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA
    */

    //  Codificamos la direccion ingresada por el usuario
    var encodeAddress = encodeURIComponent(address)

    /* 
        REQUEST
        El primer argumento es un objeto donde podemos configurar todo tipo de informacion, aqui vamos a especificar las unicas cosas a nuestra solicitud
        El segundo argumento es una funcion callback que va a ser llamada una vez que los datos procedan de vuelta desde el endpoint http
        Los parametros de la funcion callback son los mismos que se obtienen de la documentacion de la pagina de npm de request
        Ahora tenemos nuestra primera peticion http establecido y tenemos una funcion callback que se va a disparar cuando los datos regresen
    */
    
    request({
        // indica lo que vamos a solicitar
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${API_KEY}`,
        // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
        json: true
    }, (error, response, body) => {
    /*   
        error: contiene el detalle de los errores
    
        response: almacena informacion sobre la respuesta y la peticion, representa 
        el codigo de estado de respuesta del servidor: 200 404 500 + body + 
        las cabeceras parte del protocolo http que tienen un formato de clave-valor que pueden ser enviados desde el servidor al api
        la solicitud todo lo relacionado con la solicitud y tambien tenemos nuestras propias cabeceras que fueron enviadas desde el servidor al api
    
        body: representa el cuerpo de la informacion que se esta solicitando a la API
    
        para ver el objeto de una forma mas atractiva, lo convertimos a un string
        el segundo argumento se utiliza para filtrar propiedades, por lo general es inutil, por eso colocamos undifined
        el tercer argumento indica cuantos espacios se desea utilizar por sangria
    */
        // Ejemplo de muestra del objeto
        // console.log(JSON.stringify(error, undefined, 2))

        // Manejo de Errores
        if (error) {
            callback('Unable to connect to Google Server')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that Address')
        } else if (body.status === 'OK') {
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports = {
    geocodeAddress
}




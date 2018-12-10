//  Definimos el API_KEY
const API_KEY = 'AIzaSyAWU-XHRXXYKN8b4JjOcc315e6tSLr8gNU'

//  Cargamos el modulo request
const request = require('request')

//  El primer argumento es un objeto donde podemos configurar todo tipo de informacion, aqui vamos a especificar las unicas cosas a nuestra solicitud
//  El segundo argumento es una funcion callback que va a ser llamada una vez que los datos procedan de vuelta desde el endpoint http
//  Los parametros de la funcion callback son los mismos que se obtienen de la documentacion de la pagina de npm de request
//  Ahora tenemos nuestra primera peticion http establecido y tenemos una funcion callback que se va a disparar cuando los datos regresen
request({
    // indica lo que vamos a solicitar
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${API_KEY}`,
    // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
    json: true
}, (error, response, body) => {
    // error:
    // response: representa la respuesta del servidor
    // body: representa el cuerpo de la informacion que se esta solicitando a la API
    // para ver el objeto de una forma mas atractiva, lo convertimos a un string
    // el segundo argumento se utiliza para filtrar propiedades, por lo general es inutil, por eso colocamos undifined
    // el tercer argumento indica cuantos espacios se desea utilizar por sangria
    console.log(JSON.stringify(body, undefined, 2))
})
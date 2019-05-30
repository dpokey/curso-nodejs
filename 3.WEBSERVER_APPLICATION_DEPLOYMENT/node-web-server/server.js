/* 
Aqui ees donde vamos a configurar las diferentes rutas del sitio web
y tambien donde vamos a empezar la union a un puerto en nuestra maquina servidor
*/

const express = require('express')
const hbs = require('hbs')
// Creamos una nueva aplicacion

const app = express()

/* Metodo app.set permite establecer algunas configuraciones de express.
Vamos a pasar un par de valores clave donde la clave es lo que se desea para establecer y el valor es lo que se desea utilizar

clave: es que estamos configurando el view engine. esto va a decir a express el motor de vista que deseamos utilizar

valor: hbs
*/

app.set('view engine', 'hbs')



/* Metodo app.use para establecer la ruta publica donde se encuentran los archivos estativos
Con esto express sirve todos los archivos estaticos dinamicamente y ya no tenemos que colocar un metodo app.get por cada ruta
__dirname es una variable que almacena la ruta del directorio del proyecto en express y le concatenamos la ruta del directorio publico
*/

app.use(express.static(__dirname + '/public'))

/* 
Establecemos un controlador para una peticion GET, es decir que va a suceder cuando realicen una peticion GET a una ruta especifica
Hay do parametros en el metodo GET
1er argumento: url
2do argumento: la funcion que le dice a expres que va a enviar a la persona que hizo la solicitud 
Esta funcion debe tener 2 argumentos
 - 1er argumento: es la solictud (request)
 Contiene informacion como cabeceras que se utilizaron y cualquier informacion cuerpo que se utilizo en la solicitud
 - 2do argumento: es la respuesta (response)
 Contiene un monton de metodos, para que pueda responder a la solictud de la forma que quiera, puede personalizar los datos que envia devuelto
*/

app.get('/', (req, res) => {
    // metodo res.send permite enviar datos como respuesta
    // Cuando alguien vea el sitio web, van a ver esta cadena si hacen una peticion desde una aplicacion
    // Estamos enviando una cadena desde el servidor al cliente que hizo la solicitud
    
    //res.send('<h1>Hello Express</h1>')

    res.send({
        name: 'Pierre',
        likes: ['biking', 'swim']
    })
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/bad', (req, res) => {
    res.send({
        erroMessage: 'Unable to handle request'
    })
})
// Hacemos que la aplicacion escuche en un puerto especifico
// 1er parametro: puerto de escucha
// 2do parametro: funcion que se ejecutara cuando el servidor este activo, ya que puede tomar algo de tiempo en conseguir iniciar
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

3.55
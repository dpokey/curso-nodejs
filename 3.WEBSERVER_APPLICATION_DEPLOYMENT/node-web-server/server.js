/* 
Aqui ees donde vamos a configurar las diferentes rutas del sitio web
y tambien donde vamos a empezar la union a un puerto en nuestra maquina servidor
*/

const express = require('express')

// Creamos una nueva aplicacion

const app = express()

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
    res.send('Hello Express')
})

// Hacemos que la aplicacion escuche en un puerto especifico
app.listen(3000)
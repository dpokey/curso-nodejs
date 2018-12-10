// Ejemplo de funcion callback utilizando la programacion asincrona (por el setTimeout) o sincrona (sin el setTimeout)
// Se podria retornar directamente el usuario, pero en este caso no estariamos usuando una funcion callback, y del punto aqui es explicar lo que sucede detras de escena de la forma en que realmente llama a la funcion y como pasa al usuario como argumento

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Pierre'
    }

    setTimeout(() => {
        // Aqui vamos a ser realmente capaces de jecutar la funcion que se paso como argumento
        // Que en nuestro caso solo imprime los datos del usuario
        callback(user)
    }, 3000)

    console.log('Delgado')
}

// El segundo parametro es la funcion que se ejecuta cuando los datos de usuario regresan
// userObject Almacena los datos de usuario que retornaron y los pasa a esta nueva funcion
getUser(31, (userObject) => {
    console.log(userObject)
})
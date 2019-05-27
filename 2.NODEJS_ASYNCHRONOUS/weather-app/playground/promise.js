
//  declaramos una promesa que recibe como argumento una funcion anonima
//  promesa va a ejecutar una u otra funcion dependiendo si las cosas salen bien o mal
//  esto reemplaza el condicional para manejo de errores que se utilizaba en el ejemplo de los callbacks
//  una ventaja es que solo va a ejecutar una funcion, es decir si se resuelve o se rechaza solo se ejecuta una de ellas en la promesa
//  en las callbacks, no hay nada que nos impida llamar a las callbacks 2 veces, causando problemas o errores en nuestro codigo
//  en las promesas, nuca va a ser llamado 2 veces, 
//  no importa cuantas veces se intente llamar resolve o reject, estas solo se van a ejecutar 1 vez, la primera vez que se encuentre
//  es decir una promesa toma un estado, bien resolve o reject, y antes de ser llamada esta en un estado pendiente, 
//  que indica que esta esperando informacion para volver o esta esperando su asincrono.

//  En este ejemplo la promesa se considera pendiente durante los 2500 ms del setTimeout
//  y se considera resuelto cuando se a cumplido o rechazado

//  Con promesas se puede proporcionar multiples funciones, una para el manejo del exito y otra para el manejo de errores

//  parametro resolve, es una funcion que se va a devolver cuando las cosas hallan salido bien
//  parametro reject, es una funcion que se va a ejecutar cuando las cosas NO hallan salido bien

//  Ejemplo 01

var somePromise = new Promise((resolve, reject) => {
    //  para simular un retraso
    setTimeout(() => {
        resolve()
        resolve('Hey, It worked!!')
        
        reject('Unable to fulfill promise')   
    }, 2500)
})

//  llamamos al metodo then de la promesa que pasa como parametro las funciones que se van a ejecutar cuando la promesa se ejecute
somePromise.then((message) => {
    console.log('Success: ', message)
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})


//  Ejemplo 02

//  Funcion asyncrona que toma 2 numeros y devuelve una promesa
var asyncAdd = (a, b) => {
    return new Promise ((resolve, reject) => {
        //  para simular un retraso
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500)
    })
}

asyncAdd(5, 2).then((res) => {
    console.log('Result: ', res)
}, (errorMessage) => {
    console.log(errorMessage)
})

//  Ejemplo 03

//  Funcion asyncrona que toma 2 numeros y devuelve una promesa
var asyncAdd = (a, b) => {
    return new Promise ((resolve, reject) => {
        //  para simular un retraso
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500)
    })
}

//  Este ejemplo funciona de por si, 
//  pero si el 33 es cadena se imprime 
//  la primera promesa que sale 12
//  la segunda promea que sale el error

//  pero si el 7 es cadena se imprime
//  la primera promesa que sale el error
//  la segunda promesa que sale Should be 45: undifined

asyncAdd(5, 7)
.then((res) => { 
    console.log('Result: ', res)
    return asyncAdd(res, 33) 
}, 
    (errorMessage) => console.log(errorMessage))
.then((res) => console.log('Should be 45: ', res),
    (errorMessage) => console.log(errorMessage))

//  Ejemplo 04

//  Funcion asyncrona que toma 2 numeros y devuelve una promesa
var asyncAdd = (a, b) => {
    return new Promise ((resolve, reject) => {
        //  para simular un retraso
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500)
    })
}

//  para solucionar el caso anterior, borramos las capturas de error y solo catcheamos una sola captura de error
//  para cualquier problema en las promesas, solo se imprimira esa

asyncAdd(5, 7).then((res) => {
    console.log('Result: ', res)
    return asyncAdd(res, 33)
}).then((res) => {
    console.log('Should be 45: ', res)
}).catch((errorMessage) => {
    console.log(errorMessage)
})
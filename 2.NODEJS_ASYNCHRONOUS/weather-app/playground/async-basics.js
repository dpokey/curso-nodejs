
/*  Al ejecutar este programa podemos observar el funcionamiento de un codigo asincrono donde 
    nodejs no espera los 2 segundos, sino que registra la peticion de llamada pero sigue ejecutando las
    demas lines de codigo */
console.log('Starting app')

setTimeout(() => {
    console.log('Inside of callback')
},2000)

/* aqui existe un comportamiento extraño, ya que deberia ejecutarse en 0 milisegundos, pero se ejecuta
   esto sucede debido a que detras ocuarren cosas como el Call Stack, Node APIs, Callback Queue, Event Loop */
   
setTimeout(() => {
    console.log('Second setTimeout')
},0)

console.log('Finishing app')

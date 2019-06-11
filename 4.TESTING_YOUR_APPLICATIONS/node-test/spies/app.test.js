
const expect = require('expect')
const rewire = require('rewire');
// Rewire a diferencia de require tambien incorpora los metodos __set__ y __get__ los cuales se pueden usar para obtener o establecer diversos datos de la aplicacion 
var app = rewire('./app');


describe('App', () => {
    
    // Creamos una variable db con una propiedad saveUser que es la funcion que regresa el createSpy
    var db = {
        saveUser: expect.createSpy()
    }

    // Reemplazamos lo que deseamos remplazar por el que hemos definido para remplazar
    // 1er argumento: original
    // 2do argumento: final
    app.__set__('db', db)
    
    it('Should call the spy correctly', () => {
        // Creamos el Spy y va a devolver una funcion que va a ser la que va a intercambiar por la real
        var spy = expect.createSpy()
        
        // Llamamos a spy() para que se ejecute
        // spy()
        // Con toHaveBeenCalled afirmamos que nuestro espia a sido llamado. La prueba debe fallar si comentamos la linea anterior de spy()
        // expect(spy).toHaveBeenCalled()
        
        spy('Pierre', 30)
        // Con toHaveBeenCalledWith tambien podemos validar si el spy fue llamado con ciertos argumentos puntuales
        expect(spy).toHaveBeenCalledWith('Pierre', 30)        
    })

    it('Should call saveUser with user Object', () => {
         var email = 'albertodq7@gamil.com'
         var password = '123'

         app.handleSignup(email, password)
         expect(db.saveUser).toHaveBeenCalledWith({email, password})

    })



})


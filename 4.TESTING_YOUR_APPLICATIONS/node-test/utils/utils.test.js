const expect = require('expect');

/* Importamos el archivo donde se encuentra la funcion a probar */

const utils = require('./utils')

describe('Utils', () => {

    describe('#add', () => {
         /* 
        Usando Mocha

        Para crear un caso de prrueba usa it

        it es una funcion de mocha 

        Como vamos a estar en ejecucuon nuestro proyecto a travez de mocha, no hay necesidad de importar 

        it toma 2 argumentos:
        1er argumento: Una cadena de descripcion que indica que es exactamente lo que la prueba esta haciendo
        2do argumento: funcion del codigo de prueba donde se deben entregar los valores de los argumentos de la funcion que se desea probar y la validacion del resultado que se espera
        */

        it('Should add two numbers', () => {
            const res = utils.add(33, 11)
            // Evaluamos la respuesta 
            if (res !== 44) {
                // Podriamos lanzar un nuevo error, en caso qusieramos determinar si la prueba es un error 
                throw new Error(`Expected 44, but got ${res}`)
            }
        })

        /* Usando Mocha y Expect */

        it('Should add two numbers', () => {
            const res = utils.add(33, 11)
            // Evaluamos la respuesta con expect
            expect(res).toBe(44).toBeA('number')
        })

        // El parametro done le indica a mocha que esta sera una prueba de una funcion asyncrona
        // Mocha en sus resultados tambien avisa si una prueba toma mucho tiempo, ya que nada deberia tomar mas de un segundo
        it('Should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number')
                // Significa que todos estamos listos para la prueba
                done()
            })
        })

    })

    /* --------------------------------------------- */

    /* Usando Mocha */

    it('Should square a number', () => {
        const res = utils.square(5)
        if (res !== 25) {
            throw new Error(`Expected 25, but got ${res}`)
        }
    })

    /* Usando Mocha y expect */

    it('Should square a number', () => {
        const res = utils.square(5)
        expect(res).toBe(25).toBeA('number')
    })

    it('Should async aquare a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number')
            done()
        })
    })

    /* 
        Usando Jest

        Para crear un caso de prrueba usa test

        test es una funcion de jest 

        Como vamos a estar en ejecucuon nuestro proyecto a travez de jest, no hay necesidad de importar 

        it toma 2 argumentos:
        1er argumento: Una cadena de descripcion que indica que es exactamente lo que la prueba esta haciendo
        2do argumento: funcion del codigo de prueba donde se deben entregar los valores de los argumentos de la funcion que se desea probar y la validacion del resultado que se espera en este caso lo realiza toBe()

        Just imprimira un mensaje explicito del error y el resultavo obtenido. a diferencia de mocha no se tiene que usar un if para validar el resultado
    */
    // test('Should square a number', () => {
    //     expect(utils.square(5)).toBe(25)
    // });
})

/* --------------------------------------------- */

it('Should expect some values', () => {
    // toNotBe puede usarse con datos primitivos
    // expect(12).toNotBe(11)
    
    // Aqui no funciona toBe porque trataria de comprobar si son el mismo ebjeto exacto
    // Aqui deberiamos usar toEqual o toNotEqual el cual va a entrar a las propiedades del objeto y ver si son iguales
    // expect({name: 'Pierre'}).toEqual({name: 'Pierre'})

    // Aqui con toInclude o toExclude permite determinar si existe un valor en una matriz u objeto
    // expect([2, 3, 4]).toInclude(2)
    expect({
        name: 'Pierre',
        age: 30,
        location: 'Lima'
    }).toInclude({
        age: 30
    })

})

it('Should verify first and last names are set', () => {
    const user = {location: 'Lima', age: 30}
    const res = utils.setName(user, 'Pierre Delgado')
    //expect(user).toEqual(res)
    expect(res).toInclude({
        firstName: 'Pierre',
        lastName: 'Delgado'
    })
})




















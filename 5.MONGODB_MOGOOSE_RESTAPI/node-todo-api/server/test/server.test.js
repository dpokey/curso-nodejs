const request = require('supertest')
const expect = require('expect')

const {app} = require('../server')
const {Todo} = require('../models/todo')

// beforeEach nos permite correr un codigo antes de cada caso de prueba
// 1er argumento: done porque las pruebas son asincronas, y solo va a seguir adelante con el caso de pruebas cuando ejecutamos done

beforeEach((done) => {
    // Pasamos un objeto vacio para indicar que queremos borrar todos los docuemntos de la coleccion
    Todo.deleteMany({}).then(() => done())
})


describe('POST /todos', () => {
    // Verificamos si enviando los datos correctos, todo sale bien
    it('Should create a new todo', (done) => {
        // Creamos una variable text, que es lo unico que se va a usar para la prueba
        const text = 'Test todo text'

        // Esto va a pasar si el codigo de estado es correcto, el response es correcto y la bd tambien es correcta
        request(app)
            .post('/todos')
            // Enviamos el texto para la prueba
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            // pasamos como parametro una funcion con error y response que se va a ejecutar si no se cumplen las condiciones de arriba
            .end((error, res) => {
                // Si existe error, hace que se detenga la ejecucion de la funcion
                if (error) {
                    return done(error)
                }
                // validamos si los datos fueron guardados en bd
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1)
                    expect(todos[0].text).toBe(text)
                    // llamamos a done para concluir el caso de prueba
                    done()
                // El catch va capturar los errores que pudieran producirse en el interior de la funtion callback 
                }).catch((e) => done(e))

            })
    })
})
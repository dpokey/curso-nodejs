
const request = require('supertest');
const expect = require('expect');
// Importamos la app definida en server.js
var app = require('./server').app;

// Estamos utilizando Mocha como framework de pruebas y supertest para llenar los vacios

describe('Server', () => {
    describe('GET /', () => {
        it('Should return hello world responde', (done) => {
            request(app)
                .get('/')
                .expect(404)
                // .expect('Hello World!')
                // .expect({
                //     error: 'Page not found.'
                // })
        
                // Al pasar el objeto response, tenemos acceso a todos sus calores
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done)
        })
    })
    
    describe('GET /users', () => {
        it('Should show the user array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({name: 'Natalie', age: 22})
                })
                .end(done)
        })
    })
})




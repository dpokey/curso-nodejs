
const request = require('supertest');
const expect = require('expect');
// Importamos la app definida en server.js
var app = require('./server').app;

// Estamos utilizando Mocha como framework de pruebas y supertest para llenar los vacios

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


min 12.16
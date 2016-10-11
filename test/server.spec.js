'use strict'

var request = require('supertest');
const server = require('../server');

describe('The server', function() {
  it('should respond to GET requests at /cats', function(done) {
    request(server)
      .get('/cats')
      .expect(200, done);
  });

  it('should respond to POST requests at /cats', function(done) {

    function assertContains(response) {
      let pass = response.body.cats.some(function(cat) {
        return cat.name === 'simone de beauvoir' && cat.age === '2';
      });

      if (!pass) {
        console.log('body:', response.body);
        throw new Error('body did not contain {name: "simone de beauvoir", age: "2"}');
      }
    }

    request(server)
      .post('/cats')
      .type('form')
      .send({name: 'simone de beauvoir', age: 2})
      .expect(200, function() {
        request(server)
          .get('/cats')
          .expect(200)
          .expect(assertContains)
          .end(done);
      });
  });
});

// Chai Assertion Functions
const should = require('chai').should();
const expect = require('chai').expect;

// Supertest
const supertest = require('supertest');
const api = supertest(require('../index'));

// Get All Photos
describe('GET /photos', () => {
    it('should return a 200 response', (done) => {
        api
            .get('/api/photos')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('should return an array of photos', (done) => {
        api
            .get('/api/photos')
            .set('Accept', 'application/json')
            .end((error, response) => {
                expect(response.body).to.be.an('array');
                done();
            });
    });
});

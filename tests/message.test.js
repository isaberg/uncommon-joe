const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')

const api = supertest("http://localhost:4000")

/*

// test suite with it () tests enclosed
describe('GET /candies', function () {
  // Test #1itself:
  it('should return a 200 response', function (done) {
    api.get('/candies')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return an array', function(done) {
    api.get('/candies')
    //SET request details for test
    .set('Accept', 'application/json')
    //END response details for test
    .end(function (error, response) {
      expect(response.body).to.be.an('array')
      done()
    })
  })
  it('should have more than one candy', function(done) {
    api.get('/candies')
    .set('Accept', 'application/json') // Accept is a header...
    //END response details
    .end(function (error, response) {
      expect(response.body.length).to.be.greaterThan(1)
      done ()
    })
  })
})

describe('POST /candies', function () {
  before(function (done) {
    api.post('/candies')
    .set('Accept', 'application/json')
    .send( {
      'id': 5,
      'name': 'Lollipop',
      'color': 'Red'
    })
    .end(done) // moves us from the before () function onto the test
  })
  after(function (done) {
    api
      .delete('/candies/5')
      .set('Accept', 'application/json')
      .end(done)
  })
  it('should add candy object to collection candies and return', function (done) {
    api.get('/candies')
    .set('Accept', 'application/json')
    .end(function (err, response) {
      expect(response.body.length).to.equal(5)
      done()
    })
  })
})
*/

const app = require('../app')
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-http'))

describe('costumes Resources', function() {
  describe('POST /', function() {
    it('should create a costume', function(done) {
      const costume = {
        name: 'Harry Potter'
      }
      chai.request(app)
        .post('/costumes')
        .send(costume)
        .end((err, res) => {
          expect(res.status).to.equal(201)
          expect(res.body.data).to.be.an('object')
          expect(res.body.data.id).to.be.ok
          expect(res.body.data.name).to.equal(costume.name)
          done()
        })
    })

    it('should return an error if name is missing', function(done) {
      const costume = {}
      chai.request(app)
        .post('/costumes')
        .send(costume)
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.error).to.be.an('object')
          expect(res.body.error.message).to.be.ok
          done()
        })
    })

  })

  describe('GET /', function() {
    it('should retrieve a list of all the costumes', function(done) {
      chai.request(app)
        .get('/costumes')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.data).to.be.an('array')
          const costume = res.body.data[0]
          expect(costume).to.be.an('object')
          expect(costume.id).to.be.ok
          done()
        })
    })
  })

  describe('GET /:id', function() {
    it('should retrieve the single costume specified', function(done) {
      chai.request(app)
        .get('/costumes')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.data).to.be.an('array')
          const costume = res.body.data[0]
          chai.request(app)
            .get(`/costumes/${costume.id}`)
            .end((err, res) => {
              expect(res.status).to.equal(200)
              expect(res.body.data).to.be.an('object')
              expect(res.body.data.id).to.equal(costume.id)
              done()
            })
        })
    })

    it('should return an error if the id does not match a costume', function(done) {
      chai.request(app)
        .get('/costumes/999')
        .end((err, res) => {
          expect(res.status).to.equal(404)
          expect(res.body.error).to.be.an('object')
          expect(res.body.error.message).to.be.ok
          done()
        })
    })
  })

  describe('PUT /:id', function() {
    it('should update an existing costume when all information is provided', function(done) {
      chai.request(app)
        .get('/costumes')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.data).to.be.an('array')
          const costume = res.body.data[0]
          const newInfo = {
            name: 'Incredible Hulk'
          }
          chai.request(app)
            .put(`/costumes/${costume.id}`)
            .send(newInfo)
            .end((err, res) => {
              expect(res.status).to.equal(200)
              expect(res.body.data).to.be.an('object')
              expect(res.body.data.id).to.be.ok
              expect(res.body.data.name).to.equal(newInfo.name)
              done()
            })
        })

    })

    it('should return an error if name is missing', function(done) {
      chai.request(app)
        .get('/costumes')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.data).to.be.an('array')
          const costume = res.body.data[0]
          const newInfo = {}
          chai.request(app)
            .put(`/costumes/${costume.id}`)
            .send(newInfo)
            .end((err, res) => {
              expect(res.status).to.equal(400)
              expect(res.body.error).to.be.an('object')
              expect(res.body.error.message).to.be.ok
              done()
            })
        })
    })
  })

  describe('DELETE /:id', function() {
    it('should remove the specified costume', function(done) {
      chai.request(app)
        .get('/costumes')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.data).to.be.an('array')
          const costume = res.body.data[0]
          chai.request(app)
            .delete(`/costumes/${costume.id}`)
            .end((err, res) => {
              expect(res.status).to.equal(204)
              chai.request(app)
                .get(`/costumes/${costume.id}`)
                .end((err, res) => {
                  expect(res.status).to.equal(404)
                  done()
                })
            })
        })
    })

    it('should return an error if the id is not found', function(done) {
      chai.request(app)
        .delete('/costumes/999')
        .end((err, res) => {
          expect(res.status).to.equal(404)
          expect(res.body.error).to.be.an('object')
          expect(res.body.error.message).to.be.ok
          done()
        })
    })
  })
})

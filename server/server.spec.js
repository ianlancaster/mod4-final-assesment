const expect = require('chai').expect
const request = require('supertest')
const app = require('../server').app

// ------------------------------------
// Mock data
// ------------------------------------
const mockGrudges = require('./mockGrudges')

const mockGrudge = {
      "name": "Jeff Casimir",
      "offense": "He made me email strangers. lol, jk",
      "date": "2017-02-16",
      "id": 1487877281983,
      "forgiven": false
  }

// ------------------------------------
// Express route tests
// ------------------------------------

describe('GET /api/grudges', () => {
  it('responds with the correct mock data', (done) => {
    request(app)
      .get('/api/grudges')
      .expect(200)
      .expect((res) => {
        expect(res.body).to.deep.equal(mockGrudges)
      })
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('POST /api/grudge', () => {
  it('respond with a new grudge list containing the new grudge', (done) => {
    request(app)
      .post('/api/grudge')
      .send(mockGrudge)
      .expect((res) => {
        const resGrudge = res.body[Object.keys(res.body)[3]]

        expect(Object.keys(res.body).length).to.equal(4)
        expect(resGrudge).to.deep.equal(mockGrudge)
      })
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('Put /api/grudge', () => {
  it('respond with a new grudge list containing the new grudge', (done) => {
    request(app)
      .put('/api/grudge')
      .send(mockGrudge)
      .expect((res) => {
        const resGrudge = res.body[Object.keys(res.body)[3]]

        expect(Object.keys(res.body).length).to.equal(4)
        expect(resGrudge.forgiven).to.equal('true')
      })
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('undefined routes', () => {
  it('respond with a 404', (done) => {
    request(app)
      .get('/not-real')
      .expect(404, done)
  })
})

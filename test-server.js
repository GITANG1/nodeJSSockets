var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/www');
var should = chai.should();

chai.use(chaiHttp);

describe('Restaurants', function() {
    it('should list ALL restaurants on /restaurants/list GET', function(done) {
        chai.request(server)
          .get('/restaurants/list')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            done();
          });
      });

      it('should add a SINGLE blob on /blobs POST', function(done) {
        chai.request(server)
          .post('/restaurants/search')
          .send({'search': 'Pizza'})
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('name');
            res.body[0].should.have.property('city');
            done();
          });
      });
});

//install mocha, chai, chai-http
//npm install <name> --save-dev

//create test folder
// in test folder make test-server.js and copy this code
//go to www file in bin and add module.export=server;

//to run test, simply go into cmd and type mocha command
//http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.Wdbr4mhSxPY

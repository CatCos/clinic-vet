const supertest = require('supertest'),
assert = require('assert'),
should = require('should'),
app = require('../../app');


exports.users_should_return_all_users = (done) => {
  supertest(app)
  .get('/users/')
  .expect(200)
  .end((err, res) => {

    res.status.should.equal(200);

    res.body.should.be.instanceof(Array);

    res.body[0].username.should.be.type('string');
    res.body[0].firstName.should.be.type('string');
    res.body[0].lastName.should.be.type('string');
    res.body[0].contact.should.be.type('number');
    res.body[0].email.should.be.type('string');
    res.body[0].address.should.be.type('string');
    res.body[0].zip_code.should.be.type('string');

    return done();
  });
};

exports.users_should_return_sucess = (done) => {
  supertest(app)
  .post('/users/new')
  .send({ "username"   : "CatCos",
          "password"   : "ola2016",
          "firstName"  : "Catarina",
          "lastName"   : "Costa",
          "contact"    : process.env.PHONE,
          "email"      : process.env.EMAIL,
          "address"    : process.env.USER_ADDRESS,
          "zip_code"   : process.env.USER_ZIP_CODE})
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {

    res.status.should.equal(200);
    res.body.error.should.equal(false);
    res.body.should.have.property('message', 'success');
    res.body.should.have.property('data', 'USER INSERTED');

    return done();
  });
};


exports.user_should_return_user_1_information = (done) => {
  supertest(app)
  .get('/users/1')
  .expect(200)
  .end((err, res) => {

    res.status.should.equal(200);

    res.body.should.be.json;

    res.body.username.should.be.type('string');
    res.body.firstName.should.be.type('string');
    res.body.lastName.should.be.type('string');
    res.body.contact.should.be.type('number');
    res.body.email.should.be.type('string');
    res.body.address.should.be.type('string');
    res.body.zip_code.should.be.type('string');

    return done();
  });
}

exports.user_should_update_user = (done) => {
  supertest(app)
  .put('/users/update/1')
  .send({'firstName' : 'Ana'})
  .expect(200)
  .end((err, res) => {

    res.status.should.equal(200);

    res.status.should.equal(200);
    res.body.error.should.equal(false);
    res.body.should.have.property('message', 'success');
    res.body.should.have.property('data', 'USER UPDATED');

    return done();
  });
}

exports.user_should_delete_user = (done) => {
  supertest(app)
  .delete('/users/delete/43')
  .expect(200)
  .end((err, res) => {

    res.status.should.equal(200);

    res.status.should.equal(200);
    res.body.error.should.equal(false);
    res.body.should.have.property('message', 'success');
    res.body.should.have.property('data', 'USER DELETED');

    return done();
  });
}

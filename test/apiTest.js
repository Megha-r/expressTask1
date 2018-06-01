// require('./index.js');
// import 'babel-polyfill'
import chai, {expect} from 'chai';
import server from "../my_app/server.js";
import mocha from 'mocha';
import {logger} from '../my_app/logger.js';
import user from '../my_app/controllers/users/controller';

describe('Test cases for creating new user.', () => {
    describe('/post_users', () => {
   // describe('Success Case', () => {
    // before((done) => {
    // Users.remove({}, (err) => {
    // if (err) {
    // done(err);
    // }
    // });
    // done();
    // });
    it('Required fields are provided for user insertion', (done) => {
    //const user = UserController.createUser
    chai.request(server)
    .post('/post_users')
    .set('apikey', process.env.API_KEY)
    .send(user)
    .end((err, res) => {
    logger.info('----error', err, '------response', res.body);
    console.log('----error', err, '------response', res.body);
    expect(res.body).to.be.a('object');
    expect(res.body.status).to.equal('success');
    done();
    });
    });
    });
    });
    
    
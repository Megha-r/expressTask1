import mongoose from 'mongoose';
import {users} from './models/testSchema'
import { connect } from 'mongoose';
import Constants from './config/constants';
import {logger} from './logger';

// Use native promises
mongoose.Promise = global.Promise;
// console.log(Constants.mongoDB)
// Connect to our mongo database;
mongoose.connect(Constants.mongoDB, {
  // useMongoClient: true,
  /* other options */
}, (err) => {
  if (err) {
    throw err;
  }
  logger.info('Mongo DB Successfully connected');
});


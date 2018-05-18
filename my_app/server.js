import { sign, verify } from 'jsonwebtoken';
import express from 'express';
import { urlencoded, json } from 'body-parser';
import { connect } from 'mongoose';
import { secret,port,mongoDB } from './config/constants';
import morgan from 'morgan';
import routes from './routes';


const app = express();
app.set('mySecret', secret);
app.use(morgan('dev'));                             
app.use(urlencoded({ extended: true }));
app.use(json());
//app.use('/api', routes);
console.log(port);
app.listen(port, () => console.log('my_app listening on port 8080!'))
export default app;

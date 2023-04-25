// require("dotenv").config();
import dotenv from 'dotenv'
import { createConnection } from 'mysql';
import express from 'express';

import customerRouter from './routes/customerRoutes.js';
import adminRouter from  './routes/adminRoutes.js';
import { signIn } from  './controllers/common.js';
// import bookingRouter from './routes/BookingRoutes.js';

dotenv.config();
var app = express();
app.use(express.json());

import cors from 'cors';
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

var con = createConnection({
  // host: "drone-verse.crp12qoj1mnb.us-east-2.rds.amazonaws.com",
  // port: 3306,
  // user: "admin",
  // password: "admin1234",
  // database: "drone_verse"
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysqlpwd",
  database: "HealthClub"
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

app.use('/customer', customerRouter);
app.use('/admin', adminRouter);
// app.use('/booking', bookingRouter);
app.get('/signin', signIn);

export default con;

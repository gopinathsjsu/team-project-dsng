// require("dotenv").config();
import dotenv from 'dotenv'
import { createConnection } from 'mysql';
import express from 'express';

import customerRouter from './routes/customerRoutes.js';
import adminRouter from  './routes/adminRoutes.js';
import adminClassSchedule from  './routes/classScheduleRoutes.js';
import logHrs from './routes/logHrsRoutes.js';
import classEnrollment from './routes/classEnrollmentRoutes.js';
import instructorRouter from  './routes/instructorRoutes.js';
import { signIn, checkTokenValidation } from  './controllers/common.js';
import { getClassSchedule, getClassSceduleById } from './controllers/classScheduleController.js';

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
  // host: "health-club.cdzoyvebj6d5.us-east-1.rds.amazonaws.com",
  // port: 3306,
  // user: "admin",
  // password: "mysqlpwd#12345",
  // database: "HealthClub"
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
app.use('/customer/classEnrollment', classEnrollment);
app.use('/customer/logHrs', logHrs);
app.use('/instructor', instructorRouter);
app.use('/admin', adminRouter);
app.use('/admin/classSchedule', adminClassSchedule);

// common routes
app.get('/signin', signIn);
app.use('/user/verifyToken/:token', checkTokenValidation);
app.get('/classSchedule', getClassSchedule);
app.get('/classSchedule/:scheduleId', getClassSceduleById);

export default con;

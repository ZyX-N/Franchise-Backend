import express from 'express';
import { PORT, APP_ENV, MAILER_EMAIL } from '../config/config.js';
import database from '../config/database.js';
import https from 'https';
import http from 'http';
import ModelOne from './models/Model-One.js';
import { sendMail } from '../config/mailer.js';
import { getMailOne } from './views/mail-template.js';

const app = express();

/***************
  MIDDLEWARE 
****************/
app.use(express.json({ limit: '1mb' }));

app.post('/enquiry', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, city, currentBusiness, preferredBrand, investmentRange, message } =
    req.body;

  let newData = await ModelOne.create({
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    phoneNumber: phoneNumber || '',
    city: city || '',
    currentBusiness: currentBusiness || '',
    preferredBrand: preferredBrand || '',
    investmentRange: investmentRange || '',
    message: message || '',
    ipAddress: req?.ip || '',
  });

  console.log("---------------------");
  console.log(newData);
  console.log("---------------------");


  const mailInfo = {
    from: MAILER_EMAIL,
    to: 'aman.softfix@gmail.com',
    subject: 'Business Lead',
    html: getMailOne({ firstName, lastName, email, phoneNumber, city, currentBusiness, preferredBrand, investmentRange, message })
  }
  sendMail(mailInfo);

  res.status(200).send({ status: true, msg: 'Submitted successfully...!' });
});

/***************************
   NOT FOUND HANDLER 404
****************************/
app.get('*', (req, res) => {
  res.status(404).send({ status: false, msg: 'Not Found' });
});

app.post('*', (req, res) => {
  res.status(404).send({ status: false, msg: 'Not Found' });
});

/********************************************
    APPLICATION LISTER HTTP & HTTPS SERVERS
*********************************************/

let serverProtocol = null;

if (APP_ENV === 'production') {
  serverProtocol = https.createServer(credentials, app);
} else if (APP_ENV === 'local') {
  serverProtocol = http.createServer(app);
}

if (!serverProtocol) {
  throw new Error('Environment variables not set!');
}

serverProtocol.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} = ${APP_ENV}`);
});

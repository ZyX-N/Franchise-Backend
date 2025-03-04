import 'dotenv/config';

/***************************
    SERVER PORT CONFIGRATIONS
***************************/

export const APP_ENV = process.env.hasOwnProperty('APP_ENV') ? process.env.APP_ENV : 'local';
export const PORT = process.env.hasOwnProperty('PORT') ? process.env.PORT : '2024';

/***************************
    DATABASE CONFIGRATIONS
***************************/

export const DB_HOST = process.env.hasOwnProperty('DB_HOST') ? process.env.DB_HOST : '127.0.0.1';
export const DB_PORT = process.env.hasOwnProperty('DB_PORT') ? process.env.DB_PORT : '27017';
export const DB_NAME = process.env.hasOwnProperty('DB_NAME') ? process.env.DB_NAME : '';

/***************************
    MAILER CONFIGRATIONS
***************************/
export const MAILER_EMAIL = process.env.hasOwnProperty('MAILER_EMAIL') ? process.env.MAILER_EMAIL : '';
export const MAILER_PASSWORD = process.env.hasOwnProperty('MAILER_PASSWORD') ? process.env.MAILER_PASSWORD : '';

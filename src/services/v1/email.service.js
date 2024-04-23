/* eslint-disable max-len */
const fs = require('fs');

const nodemailer = require('nodemailer');
const config = require('../../config/config');
const constants = require('../../config/constants');

const logger = require('../../config/logger');

const { smtp, from } = config.email;
const { USER_ROUTE_URL, EMAIL } = constants;

const { EMAIL_TEMPLATES } = EMAIL;
const transport = nodemailer.createTransport(smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

const send = async (to, subject, html) => {
  const msg = {
    from: `"${from}" <dev401sajjad@gmail.com>`, to, subject, html,
  };
  await transport.sendMail(msg);
};

const sendEmail = async (data, key) => {
  const {
    email, name, link, url,
  } = data;
  let templateKey = key;
  if (url.includes(USER_ROUTE_URL.BLOGBUSTER)) {
    templateKey = 'WELCOME_BLOG_BUSTER';
  }
  if (url.includes(USER_ROUTE_URL.PETBAZZAR)) {
    templateKey = 'WELCOME_PETBAZZAR';
  }

  const email_template = EMAIL_TEMPLATES[templateKey];
  const { FILE_NAME, SUBJECT, APP_LABEL } = email_template;
  const file = `./src/resources/email-templates/${FILE_NAME}`;
  const html = await fs.readFileSync(file, 'utf8');
  const replaceAppLabel = '{{APP_LABEL}}';
  const re = new RegExp(replaceAppLabel, 'g');
  const emailStr = html.replace('{{NAME}}', name).replace('{{link}}', link).replace(re, APP_LABEL);
  try {
    await send(email, SUBJECT, emailStr);
  } catch (error) {
    console.log('***********************');
    console.log(error);
    console.log('***********************');
  }
};

module.exports = {
  sendEmail,
};

/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-console */
const sgMail = require('@sendgrid/mail');
const fs = require('fs');

const email = async (to, from, templateId, dynamic_template_data = null, attachmentPath = null, fileName = 'attachment.pdf') => {
  let attachmentData;
  const attachment = attachmentPath != null ? await fs.readFileSync(attachmentPath).toString('base64') : null;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // populating attachment payload if exist

  if (attachment != null) {
    attachmentData = [{
      content: attachment, filename: fileName, type: 'application/pdf', disposition: 'attachment',
    }];
  } else {
    attachmentData = [];
  }
  // mail payload
  const msg = {
    to,
    from,
    templateId,
    dynamic_template_data,
    attachments: attachmentData,
  };
  // sending mail
  sgMail
    .send(msg)
    .then(() => true)
    .catch(() => false);
};
function numberWithCommas(number) {
  // eslint-disable-next-line security/detect-unsafe-regex
  return number.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

function intWithCommas(number) {
  // eslint-disable-next-line security/detect-unsafe-regex
  return number.toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

function convertCentsToDollars(number) {
  return (number / 100).toFixed(2);
}

module.exports = {
  email,
  numberWithCommas,
  intWithCommas,
  convertCentsToDollars,
};

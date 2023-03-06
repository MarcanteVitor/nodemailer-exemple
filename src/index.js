const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.fromEmailAddress,
    pass: process.env.fromEmailPass
  }
});

const mailOptions = {
    from: process.env.fromEmailAddress,
    to: process.env.toEmailAddress,
    subject: 'E-mail teste',
    html: ` E-mail enviado via nodemailer `
};

transporter.sendMail(mailOptions, async function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});

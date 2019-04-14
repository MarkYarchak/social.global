const usersData = require('./user-data');


"use strict";
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 993,
  auth: {
    user: 'mark.yarchak.6@gmail.com',
    pass: 'v6565v6565',
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"Mark Yarchak" <mark.yarchak.6@gmail.com>',
  to: 'mark.yarchak.6@gmail.com',
  subject: 'New buyer!',
  text: `name: ${usersData.oneUser.name} \nphone: ${usersData.oneUser.phone}`,
};

transporter.sendMail(HelperOptions, (error, info) => {
  if (error) return console.log(error);
  console.log('The message was sent');
  console.log(info);

});

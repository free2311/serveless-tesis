require('dotenv').config();
var nodemailer = require('nodemailer');
//const connection = require("./db");
const generateEmailHtml = require('./generateHtml');

module.exports.handler = async () => {

  try {
    console.log("hello");
    let transporter = nodemailer.createTransport({
      service: 'outlook',
      secure: false, // true for 465, false for other ports
      auth: {
        user: "kyvillalban@itc.edu.co",
        pass: "2190244.Kv"
      }
    });

    var mailOptions = {
      from: 'kyvillalban@itc.edu.co',
      to: '<kevinazul9999@gmail.com>',
      bcc: '<bcc email addres>',
      subject: 'Test subject',
      html: `<p>hello</p>`
    };

    const response = await new Promise((rsv, rjt) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return rjt(error)
        }
        console.log(info);
      });
    });

  } catch (error) {
    console.log(error);
  }



}


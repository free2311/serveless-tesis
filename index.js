require('dotenv').config();
const nodemailer = require('nodemailer');
const connection = require("./db");
const generateEmailHtml = require('./generateHtml');

/**configurar gmail */
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kevinazul999@gmail.com',
    pass: 'efpcvhxhsrxsrqns'
  }
});

module.exports.handler = async (event) => {

  connection.query('select * from admin_clients', async (error, result) => {
    if (error) {
      console.log(error);
      res.status(401).json({ status: false, message: "error", data: [result] })

    } else {
      console.log(result);
    }

  })

  let mailOptions = {
    from: 'kevinazul999@gmail.com',
    to: 'kevinazul9999@gmail.com',
    subject: 'Correo de prueba con HTML',
    html: generateEmailHtml()
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return {
        message: error
      };
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      return {
        message: "prueba exitosa"
      };
    }
  });


};


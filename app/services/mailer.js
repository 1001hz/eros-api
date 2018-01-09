'use strict';
var config = require('../../config');
const nodemailer = require('nodemailer');

module.exports = {

    send: function(email, subject, message) {

        return new Promise(function(resolve, reject){

            nodemailer.createTestAccount((err, account) => {

                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                        user: config.mail.user,
                        pass: config.mail.password
                    }
                });
            
                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Wedding Elf" <no-reply@weddingelf.ie>', // sender address
                    to: email, // list of receivers
                    subject: subject, // Subject line
                    text: message, // plain text body
                    html: '<p>'+message+'</p>' // html body
                };
            
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        reject(error);
                    }

                    resolve('Message sent: %s', info.messageId);
                    
                });
            });

        });

    }
}

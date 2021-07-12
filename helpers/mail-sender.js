const nodemailer = require('nodemailer');
const client = require('twilio');


module.exports = {

sendEmail: function (subject,body,reciepient){
    console.log("Want to send email to ",reciepient)
    let transporter = nodemailer.createTransport({
      host: "premium89.web-hosting.com",
       port:465,
       secure:true,
        auth: {
          user: 'contact@wendyfy.com',
          pass: 'vRK*shq!O%).'
        }
      });

      let  mailOptions = {
        from: 'contact@wendyfy.com',
        to: `${reciepient}`,
        subject: `${subject}`,
        sender:"no-reply@wendyfy.com",
        replyTo:'no-reply@wendyfy.com',
        html: `<html> <body>
                    ${body}
                  </body>
                </html>`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
},
sendSms:function (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN){
    client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN).messages
        .create({body: 'Hi there! twillio messging service is  working', from: '+19093411752', to: '+237654835289'})
        .then(message => console.log(message.sid));
  }
}


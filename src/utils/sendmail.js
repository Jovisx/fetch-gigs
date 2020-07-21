import config from '../config';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(config.sendgrid_apikey);

exports.sendMail = async() => {
  const subject = 'XXXX';
  const msgBody = 'Fake Authenticated';

  try {
    const msg = {
      to: 'alexsandrpapob@gmail.com',
      from: config.support_email,
      subject,
      text: msgBody,
    };
  
    await sgMail.send(msg)
      .then(() => {
        console.log('Mail sent successfully');
      }).catch((err) => {
        console.log(`Mail send error: ${JSON.stringify(err)}`);
      });
      
  } catch (err) {
    console.log(err.message);
  }
}
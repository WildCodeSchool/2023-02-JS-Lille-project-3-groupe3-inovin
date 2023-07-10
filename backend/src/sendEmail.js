// sendEmail.js

const mailer = require("./Mailer");

mailer.sendMail(
  {
    from: "inovinwildcodeschool@gmail.com",
    to: "koukabelkhir@gmail.com", // get addresse
    subject: "Confirmation de votre commande",
    text: "Bonjour name",
    html: "<p>Hello <em>world</em></p>", // text
  },
  (err, info) => {
    if (err) console.error(err);
    else console.warn(info);
  }
);

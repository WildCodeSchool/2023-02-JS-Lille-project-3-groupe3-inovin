const mysql = require("mysql2");
const mailer = require("./Mailer");
// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "Florent",
  password: "nadinemorano",
  database: "inovin_bdd",
});
// recuperer le prenom du client
const userId = 4;
connection.query(
  "SELECT firstname, email FROM user INNER JOIN account ON user.account_ID = account.ID WHERE user.ID = ?",
  [userId],
  (error, results) => {
    if (error) {
      console.error(error);
      connection.end();
      return;
    }
    // Get the first name and email address from the results
    const firstName = results[0].firstname;
    const emailAddress = results[0].email;
    // Compose the email content with the client's first name
    const emailContent = `
    <p>Bonjour ${firstName},</p>   
    <p>Nous vous remercions sincèrement d'avoir passé commande sur notre boutique en ligne. Nous tenions à vous informer que votre commande a bien été reçue et est en cours de traitement.</p>  
    <!-- Rest of the email content -->
  `;
    // Configure the email options
    const mailOptions = {
      from: "inovincodewildschool@gmail.com",
      to: emailAddress, // l'email du user(id)
      subject: "Notification de réception de commande",
      html: emailContent,
    };
    // Send the email
    mailer.sendMail(mailOptions, (err, info) => {
      if (err) console.error(err);
      else console.warn(info);
      // Close the database connection
      connection.end();
    });
  }
);

import transporter from "../config/nodeMailer.js";

async function sendEmail() {
   try {
      const info = await transporter.sendMail({
         from: "demo1@gmail.com", // Sender address
         to: "yahyamomin06@gmail.com",
         subject: "new user created",
         html: "<b>new user created</b>", // Uncomment if you want to send HTML
      });

      console.log("Message sent: %s", info.messageId);
   } catch (error) {
      console.error("Error sending email:", error);
   }
}
export default sendEmail;

import env from "../config/config.js";
import sendEmail from "../lib/sendMail.js";
import userModel from "../models/user.model.js";

export const getIp = async (req, res) => {
   try {
      const token = env.token;
      const getIP = async () => {
         const data = await fetch(`http://ipinfo.io/json?token=${token}`);
         const res = await data.json();
         return res;
      };
      const {
         ip: IP,
         city,
         region,
         country,
         loc: location,
         org: Organization,
         postal,
         timezone,
      } = await getIP();

      const newUser = new userModel({
         IP,
         city,
         region,
         country,
         location,
         Organization,
         postal,
         timezone,
      });
      const user = await newUser.save();
      // sendEmail();

      res.status(200).json({ status: "success", user });
   } catch (error) {
      console.log(error.message);
   }
};

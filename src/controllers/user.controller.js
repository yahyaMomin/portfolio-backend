import env from "../config/config.js";
import userModel from "../models/user.model.js";

export const getIp = async (req, res) => {
   try {
      const forwarded = req.headers["x-forwarded-for"];

      const clientIp = forwarded ? forwarded.split(",")[0] : "";

      const token = env.token;
      const getIP = async () => {
         const data = await fetch(
            `http://ipinfo.io/${clientIp}/json?token=${token}`
         );
         const res = await data.json();

         return res;
      };
      const {
         ip,
         city,
         region,
         country,
         postal,
         timezone,
         loc: location,
         org: Organization,
      } = await getIP();

      const isExist = await userModel.findOne({ ip: ip });

      if (isExist)
         return res.status(200).json({ status: "success", user: isExist });

      const newUser = new userModel({
         ip,
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
      res.status(500).json({ status: "error", msg: error.message });
   }
};
export const getallUsers = async (req, res) => {
   try {
      const allUsers = await userModel.find().sort({ createdAt: -1 });
      res.status(200).json({ status: "success", users: allUsers });
   } catch (error) {
      return res.status(500).json({ status: "error", msg: error.message });
   }
};

import mongoose from "mongoose";
import env from "../config/config.js";

const connect = async () => {
   try {
      await mongoose.connect(env.mongoURI);
      console.log("database connected");
   } catch (error) {
      console.log("error while connecting " + error.message);
   }
};
export default connect;

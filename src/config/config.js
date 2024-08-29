import { config } from "dotenv";

config();

const env = {
   port: process.env.PORT,
   token: process.env.TOKEN,
   mongoURI: process.env.MONGO_URI,
};
export default env;

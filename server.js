import app from "./src/app.js";
import env from "./src/config/config.js";
import connect from "./src/db/connect.js";

const startServer = () => {
   const PORT = env.port;
   connect();
   app.listen(PORT, () => {
      console.log("server running on port " + PORT);
   });
};

startServer();

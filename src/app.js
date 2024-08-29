import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v2", userRoutes);

export default app;

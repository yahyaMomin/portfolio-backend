import express from "express";
import { getIp } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/ip", getIp);

export default router;

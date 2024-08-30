import express from "express";
import { getallUsers, getIp } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/ip", getIp);
router.get("/users", getallUsers);

export default router;

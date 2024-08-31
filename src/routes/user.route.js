import express from "express";
import { getallUsers, getIp, getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/ip", getIp);
router.get("/users", getallUsers);
router.get("/user/:id", getUser);

export default router;

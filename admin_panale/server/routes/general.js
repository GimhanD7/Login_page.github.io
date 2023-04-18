import  Express  from "express";
import {getUser} from "../controllers/general.js";

const router = Express.Router();
router.get("/user/:id", getUser);

export default router;
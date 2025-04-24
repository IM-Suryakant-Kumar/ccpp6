import { Router } from "express";
import { guestLogin, login, logout, signup } from "../controllers";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login).get(guestLogin);
router.route("/logout").get(logout);

export const userRouter = router;
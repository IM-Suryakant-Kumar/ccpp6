import { Router } from "express";
import { guestLogin, login, logout, signup, getUsers, getProfile, updateProfile} from "../controllers";
import { authenticateUser } from "../middlewares";

const router = Router();

router.route("/").get(authenticateUser, getUsers);
router.route("/me").get(authenticateUser, getProfile).patch(authenticateUser, updateProfile);
router.route("/signup").post(signup);
router.route("/login").post(login).get(guestLogin);
router.route("/logout").get(logout);

export const userRouter = router;

import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { BadRequestError, UnauthenticatedError } from "../errors";
import { sendToken } from "../utils";
import { IReq } from "../types";

export const signup = asyncWrapper(async (req: Request, res: Response) => {
	const user = await User.create(req.body);

	sendToken(res, 201, "Signed up successfully", user);
});

export const login = asyncWrapper(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (!(email && password)) throw new BadRequestError("Please provide email and password");

	const user = await User.findOne({ email })
		.select("+password")
		.populate("followers")
		.populate("followings")
		.populate("posts")
		.populate("saved")
		.populate("liked");
	if (!user) throw new UnauthenticatedError("Invalid credentials");

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");

	sendToken(res, 200, "Logged in successfully", user);
});

export const guestLogin = asyncWrapper(async (req: Request, res: Response) => {
	const user = await User.findOne({ email: "ccpp@gmail.com" })
		.select("+password")
		.populate("followers")
		.populate("followings")
		.populate("posts")
		.populate("saved")
		.populate("liked");
	if (!user) throw new UnauthenticatedError("Invalid credentials");

	const isPasswordCorrect = await user.comparePassword("secret");
	if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");

	sendToken(res, 200, "Logged in successfully", user);
});

export const logout = asyncWrapper(async (req: Request, res: Response) => {
	res
		.status(200)
		.json({ success: true, message: "Logged  out successfully", token: null, user: null });
});

export const getUsers = asyncWrapper(async (req: Request, res: Response) => {
  const users = await User.find()
  .populate("followers")
  .populate("followings")
  .populate("posts")
  .populate("saved")
  .populate("liked");
  
	res.status(200).json({ success: true, users });
});

export const getProfile = asyncWrapper(async (req: IReq, res: Response) => {
  res.status(200).json({ success: true, user: req.user });
});

export const updateProfile = asyncWrapper(async (req: IReq, res: Response) => {
  const user = await User.findByIdAndUpdate(req.user?._id, req.body, { new: true });
  res.status(200).json({ success: true, user});
});
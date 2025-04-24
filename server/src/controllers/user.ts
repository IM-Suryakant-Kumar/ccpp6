import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { BadRequestError, UnauthenticatedError } from "../errors";

interface IReq extends Request {
	body: {
		name: string;
		username: string;
		email: string;
		password: string;
	};
}

export const signup = asyncWrapper(async (req: IReq, res: Response) => {
	const { name, username, email, password } = req.body;

	if (!(name && username && email && password))
		throw new BadRequestError("Please provide all values");
	else if (!(3 <= name.length && name.length <= 20))
		throw new BadRequestError("Name should not be less than 3 and greater than 20");
	else if (!(3 <= username.length && username.length <= 20))
		throw new BadRequestError("Username should not be less than 3 and greater than 20");
	else if (!(3 <= password.length && password.length <= 6))
		throw new BadRequestError("Password should not be less than 3 and greater than 6");

	const emailAlreadyExixts = await User.findOne({ email });
	if (emailAlreadyExixts) throw new BadRequestError("Email is already exists");
	const usernameAlreadyExist = await User.findOne({ username });
	if (usernameAlreadyExist) throw new BadRequestError("Username is already exists");

	const user = await User.create(req.body);
	res.status(201).json({ success: true, message: "Signed up successfully", user });
});

export const login = asyncWrapper(async (req: IReq, res: Response) => {
	const { email, password } = req.body;

	if (!(email && password)) throw new BadRequestError("Please provide all values");

	const user = await User.findOne(req.body).select("+password");
	if (!user) throw new UnauthenticatedError("Invalid credentials");

	const isPasswordCorrect = user.comparePassword(password);
	if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");

	const token = user.createJWTToken();
	res.status(200).json({ success: true, message: "Logged in successfully", token, user });
});

export const guestLogin = asyncWrapper(async (req: IReq, res: Response) => {
	const user = await User.findOne({ email: "ccpp@gmail.com" }).select("+password");
	if (!user) throw new UnauthenticatedError("Invalid credentials");

	const isPasswordCorrect = user.comparePassword("secret");
	if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");

	const token = user.createJWTToken();
	res.status(200).json({ success: true, message: "Logged in successfully", token, user });
});

export const logout = asyncWrapper(async (req: IReq, res: Response) => {
	res.status(200).json({ success: true, message: "Logout successfully", token: null, user: null });
});

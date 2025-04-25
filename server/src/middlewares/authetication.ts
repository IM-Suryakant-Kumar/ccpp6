import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { UnauthenticatedError } from "../errors";
import { User } from "../models";
import { IReq, IUser } from "../types";

export const authenticateUser = async (req: IReq, res: Response, next: NextFunction) => {
	const token = req.headers.authorization?.split(" ")[1];
	if (!token) throw new UnauthenticatedError("Authentication Failed!");

	const { userId } = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };

	const user = (await User.findById(userId)
		.populate("followers")
		.populate("followings")
		.populate("posts")
		.populate("saved")
		.populate("liked")) as IUser;
	if (!user) throw new UnauthenticatedError("Authentication Failed!");

	req.user = user;
	next();
};

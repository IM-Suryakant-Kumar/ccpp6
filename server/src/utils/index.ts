import { Response } from "express";
import { IUser } from "../types";

export const sendToken = (res: Response, statusCode: number, message: string, user: IUser) => {
	const token = user.createJWTToken();
	res.status(statusCode).json({ success: true, message, user, token });
};

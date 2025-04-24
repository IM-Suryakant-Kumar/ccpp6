import { NextFunction, Request, Response } from "express";

interface IError {
	statusCode: number;
	message: string;
}

export const errorHandlerMiddleware = (
	err: IError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const customError = {
		statusCode: err.statusCode || 500,
		message: err.message || "Something went wrong",
	};

	res.status(customError.statusCode).json({ success: false, message: err.message, err });
};

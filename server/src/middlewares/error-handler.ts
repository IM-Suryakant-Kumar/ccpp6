import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export const errorHandlerMiddleware = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const customError = {
		statusCode: err.statusCode || 500,
		message: err.message || "Something went wrong",
	};

	if (err instanceof mongoose.Error.ValidationError) {
		customError.message = Object.values(err.errors).map(e => e.message).join(", ")
		customError.statusCode = 400;
	} 
  
  if (err instanceof mongoose.Error.CastError) {
    customError.message = "Invalid ID format.";
    customError.statusCode = 400;
  }

  if (err.name === "MongoServerError" && err.code === 11000) {
    customError.message = `${Object.keys(err.keyValue)} is already exists.`;
    customError.statusCode = 409;
  }
  
	res.status(customError.statusCode).json({ success: false, message: customError.message });
};

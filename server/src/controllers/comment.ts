import { Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Comment } from "../models";
import { IReq } from "../types";

export const createComment = asyncWrapper(async (req: IReq, res: Response) => {
	const comment = await Comment.create({ ...req.body, author: req.user?._id });
	res.status(201).json({ success: true, comment });
});

export const editComment = asyncWrapper(async (req: IReq, res: Response) => {
	const comment = await Comment.findByIdAndUpdate(req.params._id, req.body, { new: true });
	res.status(200).json({ success: true, comment });
});

export const deleteComment = asyncWrapper(async (req: IReq, res: Response) => {
	await Comment.findByIdAndDelete(req.params._id);
	res.status(200).json({ success: true, message: "Comment deleted successfully" });
});

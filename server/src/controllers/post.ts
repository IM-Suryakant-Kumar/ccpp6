import { Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Post } from "../models";
import { IReq } from "../types";

export const createPost = asyncWrapper(async (req: IReq, res: Response) => {
  const post = await Post.create({ ...req.body, author: req.user?._id });
  res.status(201).json({ success: true, post });
});

export const getPosts = asyncWrapper(async (req: IReq, res: Response) => {
  const posts = await Post.find()
    .populate("author")
    .populate("liked")
    .populate("saved")
    .populate("comments");

  res.status(200).json({ success: true, posts });
});

export const getPost = asyncWrapper(async (req: IReq, res: Response) => {
	const post = await Post.findById(req.params._id)
		.populate("author")
		.populate("liked")
		.populate("saved")
		.populate("comments");

	res.status(200).json({ success: true, post });
});

export const editPost = asyncWrapper(async (req: IReq, res: Response) => {
	const post = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true })
		.populate("author")
		.populate("liked")
		.populate("saved")
		.populate("comments");

	res.status(200).json({ success: true, post });
});

export const deletePost = asyncWrapper(async (req: IReq, res: Response) => {
	await Post.findByIdAndDelete(req.params._id);
	res.status(200).json({ success: true, message: "Post deleted successfully" });
});

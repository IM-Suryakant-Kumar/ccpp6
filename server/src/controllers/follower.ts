import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";

export const createFollower = asyncWrapper(async (req: Request, res: Response) => {
    const follower = User.findByIdAndUpdate(req.params._id, {new: true});
})
export const getFollowers = asyncWrapper(async (req: Request, res: Response) => {
  // const followers = await User.
})
export const getFollower = asyncWrapper(async (req: Request, res: Response) => {})
export const editFollower = asyncWrapper(async (req: Request, res: Response) => {})
export const deleteFollower = asyncWrapper(async (req: Request, res: Response) => {}) 
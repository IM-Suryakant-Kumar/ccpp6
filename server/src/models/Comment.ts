import { model, Schema } from "mongoose";
import { IComment } from "../types";

const commentSchema = new Schema<IComment>(
	{
		author: { type: Schema.Types.ObjectId, ref: "User" },
		content: { type: String, required: [true, "Please provide content"] },
		liked: [{ type: Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

export const Comment = model<IComment>("Comment", commentSchema);

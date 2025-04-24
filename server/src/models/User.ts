import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUser } from "../types";

const UserSchema = new Schema<IUser>(
	{
		name: { type: String, required: true },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, select: false },
		avatar: { type: String },
		bio: { type: String },
		website: { type: String },
		followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
		followings: [{ type: Schema.Types.ObjectId, ref: "User" }],
		posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
		likedPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
		savedPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
	return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.createJWTToken = function () {
	return jwt.sign({ _id: this._id, name: this.name }, process.env.JWT_SECRET as string, {
		expiresIn: "5d",
	});
};

export const User = model<IUser>("User", UserSchema);

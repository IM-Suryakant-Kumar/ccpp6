import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUser } from "../types";

const UserSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			minlength: [3, "name should not be less than 3 characters"],
			required: [true, "please provide name"],
		},
		username: {
			type: String,
			required: [true, "please provide username"],
			minlength: [3, "username should not be less than 3 characters"],
			unique: [true, "username is already exists"],
		},
		email: {
			type: String,
			required: [true, "please provide email"],
			unique: [true, "email is already exists"],
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
			minlength: [4, "password should not be less than 3 characters"],
			select: false,
		},
		avatar: { type: String },
		bio: { type: String },
		website: { type: String },
		followers: [{ type: String, required: true }],
		followings: [{ type: String, required: true }],
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

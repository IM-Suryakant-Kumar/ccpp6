import { Document, Schema } from "mongoose";

export interface IUser extends Document {
	name: string;
	username: string;
	email: string;
	password: string;
	avatar: string;
	bio: string;
	website: string;
	followers: IUser[];
	followings: IUser[];
	posts: IPost[];
	savedPosts: IPost[];
	likedPosts: IPost[];

	comparePassword: (candidatePassword: string) => Promise<boolean>;
	createJWTToken: () => string;
}

export interface IPost extends Document {
	user: IUser;
	content: string;
	image: string;
	liked: IUser[];
	saved: IUser[];
	comments: IComment[];
}

export interface IComment extends Document {
	user: IUser;
	content: string;
  liked: IUser[];
}

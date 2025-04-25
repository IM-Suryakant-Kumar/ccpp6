import { Request } from "express";

export interface IReq extends Request {
	user?: IUser;
}

export interface IUser {
  _id: string;
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

export interface IPost {
  _id: string;
	author: IUser;
	content: string;
	image: string;
	liked: IUser[];
	saved: IUser[];
	comments: IComment[];
}

export interface IComment {
  _id: string;
	author: IUser;
	content: string;
	liked: IUser[];
}

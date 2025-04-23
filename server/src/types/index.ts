import { Document } from "mongoose";

export interface IUser extends Document {
	name: string;
	username: string;
	email: string;
	password: string;
	avatar: string;
	bio: string;
	website: string;
	followers: string[];
	followings: string[];

	comparePassword: (candidatePassword: string) => Promise<boolean>;
	createJWTToken: () => string;
}

export interface IPost {
  _id: string;
  userId: string;
  username: string;
  
}

import mongoose from "mongoose";
import { IUser } from "../Types/SchemaTypes.js";

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  email: {
    type: String,
    required: true
  },
  password :{
    type: String,
    required: true
  },
  theme : {
    type: Boolean,
    default : true
  }
},{ timestamps: true });

export const User = mongoose.model<IUser>("User", userSchema);



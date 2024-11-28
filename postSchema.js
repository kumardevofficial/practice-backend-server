import mongoose, { mongo, Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  postHeading : {
    type : String,
    required : true
  },
  postDiscription : {
    type : String,
    required : true
  }
})

export const Post = mongoose.model("Post", postSchema);
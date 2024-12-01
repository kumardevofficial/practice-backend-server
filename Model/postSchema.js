import mongoose, { mongo, Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  title : {
    type : String,
    require : true
  },
  discription : {
    type : String,
    require : true,
  },
  category : {
    type : String,
    require : true
  }
})

export const Post = mongoose.model("Post", postSchema);

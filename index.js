import express from "express"
import mongoose from "mongoose";
import {Post} from "./postSchema.js"
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send(" hello this is me");
})

const createPost = async (req, res) => {
  const postData = req.body;
  const post = new Post(postData);
  try{
    post.save();
    res.status(200).json({"message" : "user created successfully"});
  } catch (err) {
    res.status(500).json({"message":"internal server error", "err" : err});
  }
}

app.post("/mypost", createPost)


const URL = "mongodb+srv://devkumark:thisisme@cluster0.ie8o5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbConnect = async (req, res) => {
  try{
    await mongoose.connect(URL);
    console.log(" Db connected successfully");
  } catch (err){
    console.log("unable to connect Db", err);
  }
}

dbConnect();

app.listen(PORT, ()=> {
  console.log(" the server is started");
})

import express from "express"
import dbConnect from "./database.js"
import {Post} from "./Model/postSchema.js"
import {router as creatPost} from "./Routes/createPost.router.js"
// const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send(" hello this is me");
})

app.use("/creatPost",creatPost);
const createPost = async (req, res) => {
  const postData = req.body;
  const post = new Post(postData);
  try{
    await post.save();
    res.status(200).json({"message" : "user created successfully"});
  } catch (err) {
    res.status(500).json({"message":"internal server error", "err" : err});
  }
}

app.post("/mypost", createPost)

dbConnect();

export default (req, res) => {
  app(req, res);  
};

// app.listen(PORT, ()=> {
//   console.log(" the server is started");
// })

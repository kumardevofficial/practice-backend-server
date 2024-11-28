import express from "express"
import dbConnect from "./database.js"

import {router as creatPost} from "./Routes/createPost.router.js"
// const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send(" hello this is me");
})

app.use("/creatPost",creatPost);

dbConnect();

export default (req, res) => {
  app(req, res);  
};

// app.listen(PORT, ()=> {
//   console.log(" the server is started");
// })

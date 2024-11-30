import express from "express"
import dbConnect from "./database.js"
import cors from "cors";


import {router as creatPost} from "./Routes/createPost.router.js"
// const PORT = 3000;
const app = express();

app.use(
  cors({
    origin: "*", // Allow specific origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies or authentication headers
  })
);

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

// import { Router } from "express";
// import {createPost} from "../Controller/controler.createPost.js"

// const router = Router();
// router.post("/create", createPost);

// export {router};



import { Router } from "express";
import { createPost, getAllArticles  } from "../Controller/controler.createPost.js";


const router = Router();

// POST request for creating a post
router.post("/create", createPost);
router.get("/articles", getAllArticles);

export { router };

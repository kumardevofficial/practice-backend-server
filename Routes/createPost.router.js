import { Router } from "express";
import {createPost} from "../Controller/controler.createPost.js"

const router = Router();
router.get("/", createPost);
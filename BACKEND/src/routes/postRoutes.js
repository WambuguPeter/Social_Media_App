import { Router } from "express";
import { getPosts, getPostByID, addPostController, deletePost} from "../controllers/postContoller.js";


const postRouter = Router();

postRouter.get("/post/getAllPosts", getPosts);
postRouter.get("/post/getPostByID/:id", getPostByID);
postRouter.post("/post/addPost", addPostController);
postRouter.delete("/post/DeletePost", deletePost);



export default postRouter;
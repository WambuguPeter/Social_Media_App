import { Router } from "express";
import { getComments, getCommentByID } from "../controllers/commentsContoller.js";


const commentsRouter = Router();

commentsRouter.get("/comments/getAllCommits", getComments);
commentsRouter.get("/comments/getCommitByID/:id", getCommentByID);




export default commentsRouter;

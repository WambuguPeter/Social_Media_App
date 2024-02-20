import { Router } from "express";
import { getGroups, getGroupByID} from "../controllers/groupsController.js";



const groupRouter = Router();

groupRouter.get("/groups/getAllGroups", getGroups);

groupRouter.get("/groups/getGroupByID/:id", getGroupByID);




export default groupRouter;
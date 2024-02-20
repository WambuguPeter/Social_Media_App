import { Router } from "express";
import { getGroupMembers, getGroupMemberByID} from "../controllers/groupMembersContoller.js";



const groupMembersRouter = Router();

groupMembersRouter.get("/groupMembers/getAllGroupMembers", getGroupMembers);
groupMembersRouter.get("/groupMembers/getGroupMembersByID/:id", getGroupMemberByID);




export default groupMembersRouter;
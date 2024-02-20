import { Router } from "express";

import { getFriendship, getFriendshipByID} from "../controllers/friendshipController.js";
const friendShipRouter = Router();

friendShipRouter.get("/friendship/getAllfriendships", getFriendship);
friendShipRouter.get("/friendship/getfriendshipByID/:id", getFriendshipByID);




export default friendShipRouter;

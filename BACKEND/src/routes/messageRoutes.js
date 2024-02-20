import { Router } from "express";
import { getMessages,
        getMessageByID,
        createMessage,
        updateMessage,
        deleteMessage } from "../controllers/messageContoller.js";



const messageRouter = Router();

messageRouter.get("/messages/getAllMessages", getMessages);
messageRouter.get("/messages/getMessageByID/:id", getMessageByID);
messageRouter.post("/messages/createNewMessage", createMessage);
messageRouter.put("/messages/updateMessage/:id", updateMessage);
messageRouter.delete("/messages/deleteMessageByID/:id", deleteMessage);



export default messageRouter;
import { Router } from "express";

import { getEvents, getEventByID } from "../controllers/eventsContoller.js";


const eventRouter = Router();

eventRouter.get("/events/getAllEvents", getEvents);
eventRouter.get("/events/getEventsByID/:id", getEventByID);


export default eventRouter;

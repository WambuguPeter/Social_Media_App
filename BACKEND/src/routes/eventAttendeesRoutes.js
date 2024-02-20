import { Router } from "express";
import { getEventAttendees, getEventAttendeeByID } from "../controllers/eventAttendeesController.js";

const eventAttendeesRouter = Router();

eventAttendeesRouter.get("/events/getAllEventAttendees", getEventAttendees);
eventAttendeesRouter.get("/events/getEventAttendeesByID/:id", getEventAttendeeByID);

export default eventAttendeesRouter;

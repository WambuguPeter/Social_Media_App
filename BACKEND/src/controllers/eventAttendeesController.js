import { getEventAttendeesService } from '../services/eventAttendeesService.js';
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';

export const getEventAttendees = async (req, res) =>{
    try {
        const data = await getEventAttendeesService();
        if (data.length === 0) {
            sendNotFound(res, 'No EventAttendees found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getEventAttendeeByID = async (req, res) =>{
    try {
        const data = await getEventAttendeesService();
        const eventAttendee = data.find((item) => item.AttendeeID == req.params.id);
        if (!eventAttendee) {
            sendNotFound(res, 'eventAttendee not found');}
            else{
                res.status(200).send(eventAttendee);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}
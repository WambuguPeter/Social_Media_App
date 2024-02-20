import { getEventService } from '../services/eventsService.js';
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';

export const getEvents = async (req, res) =>{
    try {
        const data = await getEventService();
        if (data.length === 0) {
            sendNotFound(res, 'No Event found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getEventByID = async (req, res) =>{
    try {
        const data = await getEventService();
        const event = data.find((item) => item.EventID == req.params.id);
        if (!event) {
            sendNotFound(res, 'event not found');}
            else{
                res.status(200).send(event);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}

export const updateUser = async (req, res) => {
    try {
      const data = await getUsersService();
      const user = data.find((item) => item.UserID == req.params.id);
      if (!user) {
        sendNotFound(res, "User to update not found");
      } else {
        if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
          const { Username, Email, Password, TagName, Location } = req.body;
          if (Username) {
            user.Username = Username;
          }
          if (Email) {
            user.Email = Email;
          }
          if (Password) {
            user.Password = Password;
          }
          if (TagName) {
            user.TagName = TagName;
          }
          if (Location) {
            user.Location = Location;
          }
          const updatedUser = await updateUserService(user);
          //res.status(200).json(updatedUser);
          console.log(updatedUser);
          sendCreated(res, "User updated successfully");
        } else {
          sendServerError(res, "Please provide a complete field");
        }
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  };
  

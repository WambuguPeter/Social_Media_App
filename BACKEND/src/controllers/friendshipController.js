import { getFriendshipService } from '../services/friendshipService.js';
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';

export const getFriendship = async (req, res) =>{
    try {
        const data = await getFriendshipService();
        if (data.length === 0) {
            sendNotFound(res, 'No Friendship found Be the First');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getFriendshipByID = async (req, res) =>{
    try {
        const data = await getFriendshipService();
        const friendship = data.find((item) => item.FriendshipID == req.params.id);
        if (!friendship) {
            sendNotFound(res, 'friendship not found');}
            else{
                res.status(200).send(friendship);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}
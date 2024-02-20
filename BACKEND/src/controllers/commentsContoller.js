import { getCommentsService } from '../services/commentsService.js';
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';

export const getComments = async (req, res) =>{
    try {
        const data = await getCommentsService();
        if (data.length === 0) {
            sendNotFound(res, 'No Comments found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getCommentByID = async (req, res) =>{
    try {
        const data = await getCommentsService();
        const comment = data.find((item) => item.CommentID == req.params.id);
        if (!comment) {
            sendNotFound(res, 'comment not found');}
            else{
                res.status(200).send(comment);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}
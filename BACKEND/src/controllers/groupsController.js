import { getGroupService } from '../services/groupService.js';
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';

export const getGroups = async (req, res) =>{
    try {
        const data = await getGroupService();
        if (data.length === 0) {
            sendNotFound(res, 'No group found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getGroupByID = async (req, res) =>{
    try {
        const data = await getGroupService();
        const group = data.find((item) => item.GroupID == req.params.id);
        if (!group) {
            sendNotFound(res, 'group not found');}
            else{
                res.status(200).send(group);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}

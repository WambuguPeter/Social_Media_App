import { getGroupMemberService } from "../services/groupMembersService.js";
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';

export const getGroupMembers = async (req, res) =>{
    try {
        const data = await getGroupMemberService();
        if (data.length === 0) {
            sendNotFound(res, 'No groupMembers found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getGroupMemberByID = async (req, res) =>{
    try {
        const data = await getGroupMemberService();
        const groupMember = data.find((item) => item.MemberID == req.params.id);
        if (!groupMember) {
            sendNotFound(res, 'groupMember not found');}
            else{
                res.status(200).send(groupMember);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}
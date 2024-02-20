import { getPhotoService } from "../services/photoSevice.js";
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';

export const getPhotos = async (req, res) =>{
    try {
        const data = await getPhotoService();
        if (data.length === 0) {
            sendNotFound(res, 'No Photo found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}


export const getPhotosByID = async (req, res) =>{
    try {
        const data = await getPhotoService();
        const photo = data.find((item) => item.PhotoID == req.params.id);
        if (!photo) {
            sendNotFound(res, 'Photo not found');}
            else{
                res.status(200).send(photo);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}

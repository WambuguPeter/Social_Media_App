import { Router } from "express";
import { getPhotos, getPhotosByID } from "../controllers/photosContoller.js";




const photoRouter = Router();

photoRouter.get("/photos/getAllPhotos", getPhotos);
photoRouter.get("/photos/getPhotosByID/:id", getPhotosByID);




export default photoRouter;
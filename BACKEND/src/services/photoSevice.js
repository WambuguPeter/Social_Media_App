import { poolRequest, sql } from '../utils/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getPhotoService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM tbl_Photo");
               return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const addPhotoService = async (newPhoto) => {

    try {
        const result = await poolRequest()
            .input('UserID', sql.VarChar, newPhoto.UserID)
            .input('PhotoURL', sql.VarChar, newPhoto.PhotoURL)
            // .input('Likes', sql.VarChar, newPhoto.Likes)
            // // .input('TagName', sql.VarChar, newUser.TagName)
            // .input('Comment', sql.VarChar, newPhoto.Comment)
            .query('INSERT INTO tbl_Post (UserID, PhotoURL) VALUES (@UserID, @PhotoURL)');
        return result;
    } catch (error) {
        return error;
    }
}
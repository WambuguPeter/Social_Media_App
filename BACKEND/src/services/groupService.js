import { poolRequest, sql } from '../utils/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getGroupService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM tbl_Group");
               return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const addGroupService = async (newGroup) => {

    try {
        const result = await poolRequest()
            .input('GroupName', sql.VarChar, newGroup.GroupName)
            .input('Description', sql.VarChar, newGroup.Description)
            // .input('Likes', sql.VarChar, newGroup.Likes)
            // // .input('TagName', sql.VarChar, newUser.TagName)
            // .input('Comment', sql.VarChar, newGroup.Comment)
            .query('INSERT INTO tbl_Post (GroupName, Description) VALUES (@GroupName, @Description)');
        return result;
    } catch (error) {
        return error;
    }
}
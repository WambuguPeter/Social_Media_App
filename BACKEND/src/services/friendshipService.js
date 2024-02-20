import { poolRequest, sql } from '../utils/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getFriendshipService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM tbl_Friendship");
               return result.recordset;
    } catch (error) {
        return error.message;
    }
}
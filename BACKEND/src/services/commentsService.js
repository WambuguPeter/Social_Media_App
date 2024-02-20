import { poolRequest, sql } from '../utils/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
export const getCommentsService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM tbl_Comment");
               return result.recordset;
    } catch (error) {
        return error.message;
    }
}


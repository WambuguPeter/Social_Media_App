import { poolRequest, sql } from '../utils/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getGroupMemberService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM tbl_GroupMembers");
               return result.recordset;
    } catch (error) {
        return error.message;
    }
}
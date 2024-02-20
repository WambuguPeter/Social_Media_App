import { poolRequest, sql } from '../utils/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getPostService = async () => {
    try {
        const result = await poolRequest()
        .query("SELECT * FROM tbl_Post");
               return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const addPostService = async (newPost) => {

    try {
        const result = await poolRequest()
            .input('UserID', sql.VarChar, newPost.UserID)
            .input('Content', sql.VarChar, newPost.Content)
            .input('PostDate', sql.DateTime,newPost.PostDate)
            .input('Likes', sql.VarChar, newPost.Likes)
            .input('Comment', sql.VarChar, newPost.Comment)
            .query('INSERT INTO tbl_Post (UserID, Content, Likes, Comment) VALUES (@UserID, @Content, @PostDate, @Likes, @Comment)');
        return result;
    } catch (error) {
        return error;
    }
}

// export const createPostService = async (newPost) => {
//   try {
//     const result = await poolRequest()
//       .input("UserID", sql.Int, newPost.UserID)
//       .input("Content", sql.VarChar, newPost.Content)
//       .input("PostDate", sql.DateTime, newPost.PostDate)
//       .input("Likes", sql.Int, newPost.Likes)
//       .input("Comments", sql.Int, newPost.Comments)
//       .query(
//         "INSERT INTO Post (UserID, Content, PostDate, Likes, Comments) VALUES (@UserID, @Content, @PostDate, @Likes, @Comments)"
//       );
//     return result;
//   } catch (error) {
//     return error;
//   }
// };




export const updatePostService=async(updatePost)=>{
    try {
      const updatedPost=await poolRequest()
      .input('PostID', sql.VarChar,updatePost.PostID)
      .input('Content', sql.VarChar,updatePost.Content)
      .input('PostDate', sql.DateTime,updatePost.PostDate)
      .input('Likes', sql.Int,updatePost.Likes)
      .input('Comments', sql.Int,updatePost.Comments)
    .query(`UPDATE Post  SET PostID=@PostID, Content = @Content, PostDate = @PostDate,Likes = @Likes , Comments = @Comments  WHERE  PostID = @PostID`)
  console.log(updatePost);
    return updatedPost
    
    } catch (error) {
      return error
    }
  }

  export const deletePostService = async (PostID) => {
    try {
        const result = await poolRequest()
        .input ( 'PostID',sql.VarChar, PostID)
        .query("DELETE * from tbl_Post WHERE PostID = @PostID");
        return result.recordset;
    } catch (error) {
        return error.message;
    }
  }
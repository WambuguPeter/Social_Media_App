import { poolRequest, sql } from '../utils/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export const addUserService = async (newUser) => {
  try {
      // Check if the email already exists
     

      // If the user doesn't exist, proceed with insertion
      const result = await poolRequest()
          .input('Username', sql.VarChar, newUser.Username)
          .input('Email', sql.VarChar, newUser.Email)
          .input('Password', sql.VarChar, newUser.Password)
          .input('Location', sql.VarChar, newUser.Location)
          .query('INSERT INTO tbl_User (Username, Email, Password, Location) VALUES (@Username, @Email, @Password, @Location)');
      
      return result;
  } catch (error) {
      return { error: error.message };
  }
}


export const findUserByEmailService = async(email) => {
  try {
    const result = await poolRequest()
      .input('Email', sql.VarChar, email)
      .query('SELECT * FROM tbl_User WHERE Email = @Email')
 
     return result.recordset.length > 0 ? result.recordset[0] : null
   
  } catch (error) {
    console.log(error)
    return error    
  }
 
}

// Function to get user by email
async function getUserByEmail(email) {
  const result = await poolRequest()
      .input('Email', sql.VarChar, email)
      .query('SELECT * FROM tbl_User WHERE Email = @Email');

  return result.recordset[0]; // Return the first user if found, or null if not found
}


export const getUserService = async () => {
    try {
        const result = await poolRequest().query("select * from tbl_User");
               return result.recordset;
    } catch (error) {
        return error.message;
    }
}


// Find user by credentials
export const findByCredentialsService = async (User) => {
  try {
    // Fetch user from the database by email
    const userFoundResponse = await poolRequest()
      .input("Email", sql.VarChar, User.Email)
      .query("SELECT * FROM tbl_User WHERE Email = @Email");

    // If user found
    if (userFoundResponse.recordset[0]) {
      const userData = userFoundResponse.recordset[0];

      // Compare passwords using bcrypt
      const passwordMatch = await bcrypt.compare(User.Password, userData.Password);

      if (passwordMatch) {
        // Generate JWT token
        const token = jwt.sign(
          {
            Email: userData.Email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        // Return user data without password and token
        const { Password, ...userWithoutPassword } = userData;
        return { user: userWithoutPassword, token: `JWT ${token}` };
      } else {
        return { error: "Invalid Credentials!!!" };
      }
    } else {
      return { error: "Invalid Credentials!" };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteUserService = async (UserID) => {
    try {
        const result = await poolRequest()
        .input ('UserID',sql.Int, UserID)
        .query('DELETE FROM tbl_User WHERE UserID=@UserID');
        return result.recordset;
    } catch (error) {
        return error.message;
    }
}

export const updateUserService = async (user) => {
    const { UserID, Username, Email, Password, TagName, Location } = user;
    try {
      const result = await poolRequest()
        .input("UserID", sql.Int, UserID)
        .input("Username", sql.VarChar, Username)
        .input("Email", sql.VarChar, Email)
        .input("Password", sql.VarChar, Password)
        .input("TagName", sql.VarChar, TagName)
        .input("Location", sql.VarChar, Location)
        .query(
          "UPDATE tbl_User SET Username=@Username, Email=@Email, Password=@Password, TagName=@TagName, Location=@Location WHERE UserID=@UserID"
        );
      return result;
    } catch (error) {
      return error;
    }
  };

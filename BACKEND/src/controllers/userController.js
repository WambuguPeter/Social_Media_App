import bcrypt from 'bcrypt';
import dotenv from "dotenv"
import logger from '../utils/logger.js';
import nodemailer from "nodemailer"
import { addUserService,
     getUserService, 
     deleteUserService, 
     updateUserService,
     findUserByEmailService, 
    findByCredentialsService}
      from '../services/userService.js';

import emailTemp from '../utils/emailTemp.js';
import { userValidator,
     userLoginValidator } 
     from '../validators/userValidator.js';

import { sendServerError,
     sendCreated,notAuthorized,
      sendNotFound,
       checkIfValuesIsEmptyNullUndefined
     } from '../helper/helperFunctions.js';
import { config } from 'dotenv';
dotenv.config();


export const registerUser = async (req, res) => {
    const { Username, Email, Password, TagName, Location } = req.body;
    const existingUser = await findUserByEmailService(Email);
    if (existingUser) {
        return res.status(400).json({message: "User already exist"})
    }


    const { error } = userValidator({ Username, Email, Password, TagName, Location });
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(Password, salt);
    // const { error } = userValidator({ Username, Email, Password, TagName, Location });
            const lowercaseUsername = Username.toLowerCase();
            const newUser = { Username:lowercaseUsername, Email, Password: hashedPassword, TagName, Location };
            const response = await addUserService(newUser);
            if (response.message) {
                sendServerError(res, response.message)
            } else {
                sendEmail()
                sendCreated(res, 'User created successfully');
            }
        } catch (error) {
            // sendServerError(res, error.message)
            console.log(error);
        }


    }

};

// send email after registrastion
export const sendEmail = async (req, res) => {
let transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const mailOptions = {
    from: process.env.EMAIL,
    to: 'pientopitelo@gmail.com',
    subject: 'Welcome to Social-M !',
    // text: 'test 2 sending dummy emails!'
    html : emailTemp
};

    try {
        logger.info('Sending mail....');
       await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                logger.error(error);
                res.status(500).send(error);
            } else {
                logger.info(`Email sent: ${info.response}`);
                res.status(500).send(error);
            }
        });
    } catch (error) {
        logger.error(error);
    }

}

// Login the user
export const loginUser = async (req, res) => {
    const { Email, Password } = req.body;
  
    try {
      const { error } = userLoginValidator({ Email, Password });
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      const userResponse = await findByCredentialsService({ Email, Password });
  
      if (userResponse.error) {
        return notAuthorized(res, userResponse.error);
      } else {
        return res.status(200).send(userResponse);
      }
    } catch (error) {
      return sendServerError(res, error.message);
    }
  };
  

export const getUserController = async (req, res) =>{
    try {
        const data = await getUserService();
        if (data.length === 0) {
            sendNotFound(res, 'No Users found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}

export const getUserByIDController = async (req, res) =>{
    try {
        const data = await getUserService();
        const user = data.find((item) => item.UserID == req.params.id);
        if (!user) {
            sendNotFound(res, 'User not found');}
            else{
                res.status(200).send(user);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}


export const deleteUser1 = async (req, res) =>{
    try {
        const data = await deleteUserService();
        const user = data.find((item) => item.UserID == req.params.id);
        if (!user) {
            sendNotFound(res, 'User not found');}
            else{
                res.status(200).send(user);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}

export const deleteUser = async (req, res) => {
  try {
      const id = req.params.id;
      const data = await getUserService();
      
      // Check if the user exists
      const deletedUser = data.find((item) => item.UserID === id);
      if (!deletedUser) {
          return res.status(404).json({ message: "User not found" });
      }

      // If the user exists, proceed with deletion
      await deleteUserService(id);

      return res.status(200).json({
          message: "User deleted successfully"
      });
      
  } catch (error) {
      return res.status(500).json({
          error: error.message
      });
  }
}


export const updateUser = async (req, res) => {
    try {
      const data = await getUserService();
      const user = data.find((item) => item.UserID == req.params.id);
      if (!user) {
        sendNotFound(res, "User to update not found");
      } else {
        if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
          const { Username, Email, Password, TagName, Location } = req.body;
          if (Username) {
            tbl_User.Username = Username;
          }
          if (Email) {
            tbl_User.Email = Email;
          }
          if (Password) {
            tbl_User.Password = Password;
          }
          if (TagName) {
            tbl_User.TagName = TagName;
          }
          if (Location) {
            tbl_User.Location = Location;
          }
          const updatedUser = await updateUserService(user);
          //res.status(200).json(updatedUser);
          console.log(updatedUser);
          sendCreated(res, "User updated successfully");
        } else {
          sendServerError(res, "Please provide a complete field");
        }
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  };
  
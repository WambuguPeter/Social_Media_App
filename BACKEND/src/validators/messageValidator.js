import joi from "joi";
import { getUserByIDController } from "../controllers/userController.js"; // Assuming you have a function to fetch user details by ID

export const messageValidator = async (message) => {
  const messageValidatorSchema = joi.object({
    SenderID: joi.number().required(),
    ReceiverID: joi.number().required(),
    MessageDate: joi.date().required(),
    Content: joi.string().required(),
  });

  const { error } = messageValidatorSchema.validate(message);
  if (error) return { error: error.details[0].message };

  // Check if SenderID exists
  const senderExists = await getUserByIDController(message.SenderID);
  if (!senderExists) return { error: "Sender does not exist" };

  // Check if ReceiverID exists
  const receiverExists = await getUserByIDController(message.ReceiverID);
  if (!receiverExists) return { error: "Receiver does not exist" };

  // If both sender and receiver exist, return validated message
  return { value: message };
};

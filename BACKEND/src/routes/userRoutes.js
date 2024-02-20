import { Router } from "express";
import { loginUser, registerUser, getUserController, getUserByIDController, deleteUser, updateUser } from "../controllers/userController.js";


const userRouter = Router();

userRouter.post("/users/register", registerUser);
userRouter.post("/users/auth/login", loginUser);
userRouter.get("/users/getUser", getUserController);
userRouter.put("/users/updateUser/:id", updateUser);
userRouter.get("/users/getUserByID/:id", getUserByIDController);
userRouter.delete("/users/deleteUser/:id", deleteUser);



export default userRouter;
import express from 'express';
import bodyParser from 'body-parser';
import logger from './src/utils/logger.js';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'
import emailTemp from './src/utils/emailTemp.js';

// import todoRouter from './src/routes/todoRoutes.js';

//Routers
import userRouter from './src/routes/userRoutes.js';
import groupRouter from './src/routes/groupRoutes.js';
import messageRouter from './src/routes/messageRoutes.js';
import photoRouter from './src/routes/photoRoutes.js';
import eventRouter from './src/routes/eventRoutes.js';
import friendShipRouter from './src/routes/friendshipRoutes.js';
import groupMembersRouter from './src/routes/groupMembersRoute.js';
import postRouter from './src/routes/postRoutes.js';
import commentsRouter from './src/routes/commentsRoutes.js';
import eventAttendeesRouter from './src/routes/eventAttendeesRoutes.js';




dotenv.config();
const port = process.env.API_PORT || 8000;
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


//middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// rateLimitMiddleware(app);



//Routes
app.use('/api', userRouter);
app.use('/api', groupRouter);
app.use('/api', groupMembersRouter);
app.use('/api', messageRouter);
app.use('/api', eventRouter);
app.use('/api', eventAttendeesRouter);
app.use('/api', postRouter);
app.use('/api', photoRouter);
app.use('/api', commentsRouter);
app.use('/api', friendShipRouter);





app.listen(port, () => {
    logger.info(`server running on port ${port}`)
})
import { getPostService, addPostService, deletePostService } from '../services/postService.js';
import { sendServerError, sendNotFound } from '../helper/helperFunctions.js';
import { createPostValidator } from '../validators/postValidator.js';

export const getPosts = async (req, res) =>{
    try {
        const data = await getPostService();
        if (data.length === 0) {
            sendNotFound(res, 'No Post found');}
            else{
                res.status(200).send(data);
            }
        }
     catch (error) {
        sendServerError(res, error);
    }
}


export const getPostByID = async (req, res) =>{
    try {
        const data = await getPostService();
        const post = data.find((item) => item.PostID == req.params.id);
        if (!post) {
            sendNotFound(res, 'Post not found');}
            else{
                res.status(200).send(post);
            }
        }
     catch (error) {
        sendServerError(res, error.message);
    }
}


export const addPostController = async (req, res) => {
    try {

      const {UserID,Content,Likes,Comments } = req.body;
      console.log(req.body);

    //   const PostID = v4();
      const { error } = createPostValidator({ Content });
      console.log("error",error);
      if (error) {
        return res.status(400).send(error.details[0].message);
      } else {
        const PostDate = new Date();    
        const addedPost = { UserID, Content,PostDate,Likes,Comments};
  
        const result = await addPostService(addedPost);
  
        if (result.message) {
          sendServerError(res, result.message)
      } else {
          sendCreated(res, 'post created successfully');
      }
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  };

//   export const createPost = async (req, res) => {
//     const { UserID, Content, PostDate, Likes, Comments } = req.body;
//     const { error } = postValidator({
//       UserID,
//       Content,
//       PostDate,
//       Likes,
//       Comments,
//     });
//     if (error) {
//       res.status(400).send(error.details[0].message);
//     } else {
//       try {
//         const newPost = {
//           UserID,
//           Content,
//           PostDate,
//           Likes,
//           Comments,
//         };
//         const response = await createPostService(newPost);
//         if (response.message) {
//           sendServerError(res, response.message);
//         } else {
//           sendCreated(res, "Post created successfully");
//           // res.status(200).json(newUser);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };








  export const deletePost = async (req, res) => {
    try {
        const PostID = req.params.PostID;
        console.log('Post id',PostID);
        await deletePostService(PostID)

        return res.status(200).json({
            message: "Post deleted successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }
}
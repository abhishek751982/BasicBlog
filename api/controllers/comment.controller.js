import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, res, next) => {
  try {
    const { postId, userId, content } = req.body;
    if(userId !== req.user.id) {
      return next(errorHandler(403, 'You are not allowed to create to create this comment'));
    }
    const newComment = new Comment({
      postId,
      userId,
      content
    });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
  
}
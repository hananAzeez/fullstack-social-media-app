import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    location: String,
    description: String,
    userPicturePath: String,
    picturePath: String,
    likes: {
      type: Map,
      of: Boolen,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.Model("Post", postSchema);

export default Post;

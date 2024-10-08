import { Timestamp } from "bson";
import mongoose from "mongoose";


const postSchema = mongoose.Schema (
    {
        userId: {
            type: String,
            required: true,
        },
        location : String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        like: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: [],
        }
    },
    {    Timestamps: true}
);

const Post = mongoose.model("Post", postSchema);

export default Post;
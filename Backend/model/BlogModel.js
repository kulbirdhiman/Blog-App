import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },

}, { timestamps: true })
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
// module.exports = mongoose.model("Blog", blogSchema);
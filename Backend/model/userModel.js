import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    // blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }]

}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;

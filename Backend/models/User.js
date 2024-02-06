import mongoose from "mongoose";
const USerShecma = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: { type: String, required: true }
})
const User = mongoose.model("User", USerShecma)
export default User
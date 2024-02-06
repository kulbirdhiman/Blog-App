import mongoose from "mongoose";

const connectDb = async (port) => {
    try {
        await mongoose.connect(port)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}
export default connectDb
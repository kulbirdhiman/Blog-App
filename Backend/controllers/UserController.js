import mongoose from "mongoose";
import expressAsyncHandler from 'express-async-handler'
import User from "../models/User";


const signUp = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || email || password) {
        console.log("please fill all fields")
    }
    try {
        let isExits = await User.find({
            email: email
        })
        isExits ? console.log("user alerady login ") : console.log("")
        const user = await User.create({
            name,
            email,
            password
        })
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})
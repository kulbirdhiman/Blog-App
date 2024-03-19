import expressAsyncHandler from "express-async-handler";
import Blog from "../model/BlogModel";
import { trusted } from "mongoose";
const createBlog = expressAsyncHandler(async (req, res) => {
    const { title, desc, } = req.body
    try {
        const isExits = await Blog.find(title);
        if (isExits) {
            res.send("this is already created")
        }
        const newBlog = await Blog.create({ title, desc })
        res.json(newBlog)
    } catch (error) {
        res.json({ msg: error })
    }
});
const deleteBlog = expressAsyncHandler(async (req, res) => {
    try {
        const deleted = await Blog.findByIdAndDelete(req.params.id);
        if (deleted) {
            res.json(deleted)
        }
        else {
            res.json({
                messge: "not deleted"
            })
        }

    } catch (error) {
        res.status(404).json({ messge: "something going wrong" })
    }
})
const updateBlog = expressAsyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, desc } = req.body
    try {
        const findBlog = await Blog.findById(id);
        if (findBlog) {
            const updated = await Blog.findByIdAndUpdate(id, { title, desc }, { new: true })
            res.json(updated)
        }
        else {
            res.json({ messge: "not founded" })
        }
    } catch (error) {
        res.status(404).json({ messge: "something going wrong" })
    }
})
const findAllblog = expressAsyncHandler(async (req, res) => {
    try {
        const allblog = await Blog.find().limit(10)
        res.json(allblog)
    } catch (error) {
        res.status(404).json({ messge: "something going wrong" })
    }
})
const findByidBlog = expressAsyncHandler(async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    } catch (error) {
        res.status(404).json({ messge: "something going wrong" })
    }
})


export { createBlog, findAllblog, findByidBlog, updateBlog, deleteBlog }
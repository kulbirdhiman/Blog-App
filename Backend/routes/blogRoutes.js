import express from 'express';
import { createBlog, findAllblog, findByidBlog, updateBlog, deleteBlog } from '../controllers/BlogController.js'
const router = express.Router();

router.route("/").post(createBlog).get(findAllblog)
router.route("/:id").put(updateBlog).delete(deleteBlog).get(findByidBlog)
export default router
import express from "express";
import {
    createUser,
    loginUser,
    logoutCurrentUser,
    getAllUsers,
    getCurrentUserProfile,
    updateCurrentUserProfile,
} from '../controllers/userControllers.js'
const router = express.Router()
router.route("/").post(createUser).get(getAllUsers)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutCurrentUser)
router.route("/profile").post(getCurrentUserProfile)
router.route("/update").post(updateCurrentUserProfile)

export default router
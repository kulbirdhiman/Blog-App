import jwt from 'jsonwebtoken';
import User from '../model/userModel.js'
const authration = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, "karan");
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            res.json(error)
        }
    }
}

export { authration }
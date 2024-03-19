import jwt from 'jsonwebtoken'
const createToken = async (res, id) => {
    try {
        const token = jwt.sign({ id }, "karan", {
            expiresIn: "30d"
        });
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        })

    } catch (error) {
        res.json({ error: "Error creating token" })
    }
}
export default createToken;
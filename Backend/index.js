import express from express
import connectDb from "./db/connectDb"
const app = express()
const port = env.process.port || 5000
connectDb()
app.listen(port, () => console.log("server up"))
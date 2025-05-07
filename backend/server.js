import express from 'express'
import cors from 'cors'
import {connectDb} from "./config/config.js";
import router from "./router/router.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors("*"))

connectDb()
app.use("/", router)

app.listen(3000, () => {
    console.log(`Server started on port 3000!`)
})
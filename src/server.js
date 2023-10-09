import express from "express";
import cors from 'cors'

const port = 3001;
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.get("/", (req, res) => {
    const message = {message: "hello"};
    res.send(message);
})
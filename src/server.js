import express from "express";
import cors from 'cors'
import socketIo from 'socket.io'
import http from 'http'

const port = 3001;
const app = express();
const server = http.createServer(app);

app.use(cors());

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3001"
    }
})

io.on('connection', (socket) => {
    console.log('a client connected: ', socket.id);
    socket.join('clock-room')
    
    socket.on('disconnect', (reason) => {
        console.log(reason);
    });
});

setInterval(() => {
    io.to('clock-room').emit('time', new Date())
}, 1000)

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.get("/", (req, res) => {
    const message = {message: "hello"};
    res.send(message);
})
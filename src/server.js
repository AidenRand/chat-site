import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors'

const app = express();
app.use(cors());


const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})
app.get('/', (req, res) => {
    res.send("hello")
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', (reason) => {
    console.log('user disconnected', reason);
  })
});

server.listen(3001, () => {
  console.log('server running at http://localhost:3000');
});
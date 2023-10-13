import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import ChatPage from './components/Chat';
import { io } from 'socket.io-client';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [response, setResponse] = useState([]);
    const [time, setTime] = useState('fetching');
    const socket = io('http://localhost:3001');

    useEffect(() => {
        axios({
            url: 'http://localhost:3001',
            method: 'GET',
        }).then((res) => {
            setResponse(res.data.message);
        });
    });

    useEffect(() => {
        socket.on('connect', () => console.log(socket.id));
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 3001);
        });
        socket.on('time', (data) => setTime(data));
        socket.on('disconnect', () => setTime('server disconnected'));
    }, []);

    return (
        <>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home socket={socket} />} />
                    <Route
                        path='/Chat'
                        element={<ChatPage socket={socket} />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;

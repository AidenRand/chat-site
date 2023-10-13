import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { io } from 'socket.io-client';

function App() {
    const [response, setResponse] = useState([]);
    const [time, setTime] = useState('fetching');

    useEffect(() => {
        axios({
            url: 'http://localhost:3001',
            method: 'GET',
        }).then((res) => {
            setResponse(res.data.message);
        });
    });

    useEffect(() => {
        const socket = io('http://localhost:3001');

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
                <p>{time}</p>
                <p>{response}</p>
            </div>
        </>
    );
}

export default App;

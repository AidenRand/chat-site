import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { io } from 'socket.io-client';

function App() {
    const [response, setResponse] = useState([]);

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
    });

    return (
        <>
            <p>{response}</p>
        </>
    );
}

export default App;

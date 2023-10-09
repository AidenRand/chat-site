import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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

    return (
        <>
            <p>{response}</p>
        </>
    );
}

export default App;

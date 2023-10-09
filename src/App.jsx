import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            url: 'http://localhost:3001',
            method: 'GET',
        }).then((res) => {
            setData(res.json.message);
        });
    });

    return (
        <>
            <p>{data}</p>
        </>
    );
}

export default App;

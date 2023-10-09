import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchFunction = async () => {
            try {
                const result = await fetch('http://localhost:3001');
                const data = await result.json();
                console.log('result', data);
                setData(data.message);
            } catch (error) {
                console.log(error);
            }
        };
        fetchFunction();
    }, []);

    return (
        <>
            <p>{data}</p>
        </>
    );
}

export default App;

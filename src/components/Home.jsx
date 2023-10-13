import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        navigate('/chat');
    };

    return (
        <div className='home-container'>
            <form className='home-form' onSubmit={handleSubmit}>
                <h2 className='home-title'>Sign in to Chat</h2>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    className='username-input'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    minLength={6}
                ></input>
                <button className='sign-in-btn'>Sign In</button>
            </form>
        </div>
    );
}

export default Home;

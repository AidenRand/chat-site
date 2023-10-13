import React, { Component } from 'react';
import Home from './components/Home';
import ChatPage from './components/Chat';

import { Routes, Route } from 'react-router-dom';

function PageRouters() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Chat' element={<ChatPage />} />
        </Routes>
    );
}

export default PageRouters;

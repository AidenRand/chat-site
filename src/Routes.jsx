import React, { Component } from 'react';
import Home from './Home';

import { Routes, Route } from 'react-router-dom';

function pageRouters() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
    );
}

export default pageRouters;

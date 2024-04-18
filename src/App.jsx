import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import ID from './pages/cluggid';
import Chat from './pages/chat';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/id" element={<ID />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/id" element={<ID />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;

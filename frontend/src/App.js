import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Chat from './Pages/Chat';
import Chats from './Pages/Chats';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_account" element={<Register />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/chats' element={<Chats />} />
      </Routes>
    </Router>
  );
}

export default App;

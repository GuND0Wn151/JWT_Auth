
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {  Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Verify from './Utilities/Verify';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const token=localStorage.getItem('token');
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/'element={
          <Verify token={token} children={<Home/>}/>

        }  />
      </Routes>
      
      </div>
    </>
  );
}

export default App;


import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {  Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/'element={<Home />} />
      </Routes>
      
      </div>
    </>
  );
}

export default App;

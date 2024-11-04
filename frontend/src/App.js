import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home.js';
import Login from './pages/login/login.js';
import SignUp from './pages/signup/signup.js';
import { useAuthContext } from './context/AuthContext.js';
import { Toaster } from 'react-hot-toast';

function App() {
  const { authUser } = useAuthContext(); 

  return (
    <Router>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

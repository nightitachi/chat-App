import './App.css';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.js';
import Login from './pages/login/Login.js';
import SignUp from './pages/signup/SignUp.js';

function App() {
  return (
    <Router>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirects invalid routes to Home */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

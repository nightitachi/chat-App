import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.js'
import Home from './pages/home/Home.js'
import SignUp from './pages/signup/SignUp.js'
function App() {
  return (
    <Router>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

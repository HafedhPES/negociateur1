import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Search from './components/search';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Forget from './pages/forget';

function App() {
  return (
    
    <Router>
      
    <Routes>
      <Route exact path="/" element={<Search/>}/>
      <Route exact path="/login" element={<Login/>}/>
      
      <Route path="/register" element={<Register/>}/>
      <Route path="/forget" element={<Forget/>}/>
    </Routes>
  
</Router>



  );
}

export default App;

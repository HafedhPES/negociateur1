import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Search from './components/search';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Forget from './pages/forget';
import Publier from './pages/publier';
import Home from './pages/home/home';
import Details from './pages/details';
import Category from './pages/category';
import { useState } from 'react';

function App() {
  const [selectedCat,setSelectedCat]= useState("accueil")
  return (
    
    <Router>
      
    <Routes>
      <Route exact path="/" element={<Home selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/publier" element={<Publier/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forget" element={<Forget/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/category" element={<Category selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>}/>
    </Routes>
  
</Router>



  );
}

export default App;

import React from 'react';
import NavBar from './Component/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Flowers from './Pages/Flowers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Services from './Pages/Services';



const App = () => {
  return (
    <div class="body">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path=''/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Orders/>} path="/orders"/>
        <Route element={<Profile/>} path="/profile"/>
        <Route element={<Flowers/> } path='/flowers'/>
        <Route element={<Services/>} path='/services'/>
        <Route element={<Signup/>} path='/profile/signin'/>
        <Route element={<Signin/>} path='/profile/signup'/>
        
        </Routes>
        <Footer/>
        
        </BrowserRouter>
        
        
        
    </div>
  );
};

export default App;
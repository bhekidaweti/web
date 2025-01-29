import React from 'react';
import {Route, Routes} from 'react-router-dom';
import logo from './digwa-logo.png';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import OtherServices from './components/OtherServices';
import CustomizedGraves from './components/CustomizedGraves';
import TheTeam from './components/TheTeam';
import Downloads from './components/Downloads';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-title">Digwamaje Grave Services</h1>
      </header>
      <Menu />
      <Routes>  
              <Route path='/' element={ < Home /> } />             
              <Route path='contact' element={< Contact />} />             
              <Route path='about' element={< About />} />         
              <Route path='services' element={< Services />} />     
              <Route path='testimonials' element={< Testimonials />} /> 
              <Route path='other-services' element={ < OtherServices /> } />             
              <Route path='customized-graves' element={ < CustomizedGraves /> } /> 
              <Route path='the-team' element={ < TheTeam /> } /> 
              <Route path='downloads' element={ < Downloads /> } />
            </Routes>  
      <Footer />
    </div>
  );
}

export default App;

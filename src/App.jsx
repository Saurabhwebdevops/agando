import { useState } from 'react';
import './App.css';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import { Header } from './components/Header';
import './assets/style.min.css';
import logo from '../public/images/web-logo.png';
import { Footer } from './components/Footer';
import menuContext from './components/Menu';
import { Service } from './components/Service';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Who from './components/Who';
import   {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const menuItem = ['Home', 'About us', 'Who we are', 'Contact us'];

  return (
    <menuContext.Provider value={menuItem}>
      <Router>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/who-we-are' element={<Who/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer logo={logo} />
    </menuContext.Provider>
  );
}

export default App;

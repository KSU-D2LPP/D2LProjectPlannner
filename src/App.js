import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Features from './components/Features';
import ContactUs from './components/ContactUs';  

function App() {
  const appStyle = {
    backgroundColor: 'rgb(51,51,51)' // Background color for the entire App
  };

  const mainContentStyle = {
    marginLeft: '80px', 
    backgroundColor: '#333', 
    minHeight: '96vh',
    color: 'white', 
  };

  return (
    
    <Router>
      <div className="App" style={appStyle}>
        <Sidebar />
        <div style={mainContentStyle}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} index /> {/* Home as the default route */}
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact-us" element={<ContactUs />} /> 
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
    
  );
}

export default App;

import React from 'react';
import logo from './component-assets/D2LPP-logo.png'; 

const Home = () => {
  const divStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: '10px', 
    color: 'gold', 
    padding: '0px',
    textAlign: 'center',
    maxWidth: '700px',  
    margin: '0 auto'  
  };

  const buttonStyle = {
    backgroundColor: 'gold',
    color: 'black',
    padding: '15px 30px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px 2px',
    cursor: 'pointer',
    borderRadius: '12px'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Logo Section */}
      <div style={{ margin: '10px' }}>
        <img src={logo} alt="Logo" style={{ width: '300px' }} />
      </div>
      
      {/* Intro Section */}
      <div style={divStyle}>
        <h1>Welcome to our Senior Project Landing Page!</h1>
        <p>
          This site will serve as the online display of our project containing <br />
          our documentation, some advance feature explanations <br />
          and everything else required to fit our rubric. <br />
          Enjoy!<br /><br />
        </p>

        <p>SP-04 No Color 3rd Party D2L Application<br />
           CS 4850 Section 02 Fall 2023</p>
      </div>

      
      <div style={{ ...divStyle, marginTop: '20px' }}>
        <h3>Go to the Web Application</h3>
        <a 
          href="https://ksud2lpp-main.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={buttonStyle}
        >
          Click here to head to the D2L Project Planner Web Application
        </a>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const Footer = () => {
  const divStyle = {
    position: 'fixed', 
    bottom: '0', 
    width: '100%',  
    height: '13px',  
    backgroundColor: 'gold', 
    color: 'black',  
    fontSize: '10px',
    textAlign: 'center'
  };

  return (
    <div style={divStyle}>KSU Senior Project - Sean Work, Kenneth Molinari, Christopher Dymanus - 2023</div>
  );
};

export default Footer;

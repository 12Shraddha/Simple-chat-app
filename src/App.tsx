import React from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Login from './Components/Login/Login';
import PageLoader from './Components/Login/PageLoader';
import Error from './Components/Login/Error';

function App() {
    
  return (
    <div className="App">
     <Navbar/> 
      <Login />
    
  


    </div>
  );
}

export default App;

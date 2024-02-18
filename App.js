// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
}from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{

      setAlert(null);
    } ,3000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title ='Textutils-darkmode';
      setInterval(() =>{
        document.title ='instal text utils';
      }, 3000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title ='text utils light mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Textutils" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/">
        <Textform showAlert={showAlert} heading="Enter the text Analyser" Mode={Mode} />
          </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;

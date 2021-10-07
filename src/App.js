import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import TextForm from './components/textform';
import React, { useState } from 'react'
import Alert from './components/alert';

// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode", "success")
      document.title = "Textutils - Darkmode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode", "success")
      document.title = "Textutils - Lightmode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3" >
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

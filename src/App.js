// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
// import { type } from '@testing-library/user-event/dist/type';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  // }
  const [mode , setMode] = useState('light');
  const toggleMode = ()=>{
  //   removeBodyClasses();
    // document.body.classList.add('bg-' + cls)
    if(mode === "dark")
    {
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      // document.title = "TextUtils - Light Mode"
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = '#353935';
      showAlert("Dark mode has been enabled" , "success");
      // document.title = "TextUtils - Dark Mode"

    }
  }

  return (
    <>     
    <BrowserRouter>
      {/* <Navbar/> */}
      <Navbar title = "TextUtils" about = "About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-5 ">
          {/* <TextForm
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
          />
          <About/>      */}
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;

import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About'
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const removeClassList =()=>{
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  // }

  const toggleMode = (cls)=>{
    // removeClassList();
    // document.body.classList.add('bg-'+cls)
    if(mode === 'dark'){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.title = 'light mode ';
    }else{
      setMode("dark");
      document.body.style.backgroundColor = '#000080';
      document.title = 'dark mode ';
    }
  }

  return (

    <>
    <Router>
      <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode}/>
      <Alert Alert={alert}/>
      <Switch>
          <Route exact path="/about">
              <About mode={mode} />
          </Route>
          
          <Route exact path="/">
            <div className="container my-3">
              <TextForm showAlert={showAlert} heading = "Enter Text here:" mode={mode}/>
            </div>
          </Route>
      </Switch>
      
      
    </Router>
     </>
  );
}


export default App;

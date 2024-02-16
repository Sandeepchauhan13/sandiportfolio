import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Alert from './components/Alert';


const App = () => {
  const [mode, setMode]= useState('dark');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#18181b';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= '#dcfce7';
      showAlert("Light mode has been enabled","success");
    }
  }

  // alert logic 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  return (

    <>
     <NavBar toggleMode={toggleMode} showAlert={showAlert} mode={mode}/>
     <Alert alert={alert} />
     <Home toggleMode={toggleMode} showAlert={showAlert} mode={mode}/>
     <About toggleMode={toggleMode} showAlert={showAlert} mode={mode}/>
     <Portfolio toggleMode={toggleMode} showAlert={showAlert} mode={mode} />
     <Experience toggleMode={toggleMode} showAlert={showAlert} mode={mode}/>
     <Contact toggleMode={toggleMode} showAlert={showAlert} mode={mode}/>
     <SocialLinks toggleMode={toggleMode} showAlert={showAlert}  mode={mode} />
    </>
  )
}

export default App;

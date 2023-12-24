import React,{useState} from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode]= useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
    <>
      <NavBar toggleMode={toggleMode} mode={mode} />
      <Home toggleMode={toggleMode} mode={mode} />
      <About toggleMode={toggleMode} mode={mode} />
      <Portfolio toggleMode={toggleMode} mode={mode} />
      <Experience toggleMode={toggleMode} mode={mode}/>
      <Contact toggleMode={toggleMode} mode={mode} />
      <SocialLinks toggleMode={toggleMode} mode={mode} />
    </>
  );
}

export default App;

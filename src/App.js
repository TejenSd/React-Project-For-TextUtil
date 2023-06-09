import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const[mode, setMode] = useState('light'); //willl tell if dark mode is enabled or not
  
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* here title is a props which will make the navbar text as dynamic*/}
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
      
      <div className="container my-3" >
        <TextForm heading = "Enter your text to analyze below" mode = {mode}/>
      </div>
      
      
    </>
  );
}

export default App;

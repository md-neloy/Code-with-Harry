import { useState } from 'react';
import './App.css';
import About from './components/About';
import From from './components/From';
import Navbar from './components/Navbar';

function App() {
  const [bg, setBg] = useState("light");
  const toggle = () => {
    if (bg === "light") {
      setBg("dark")
      document.body.style.background = "#032743";
    }
    else {
      setBg("light")
      document.body.style.background = "white";
    }
  }
  
    return (
      <>
        <Navbar mode={bg} togglemode ={toggle} />
        <From heading="analyzed the text" mode={bg} />
        <About />
      </>
    );
}

export default App;

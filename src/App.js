import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import From from './components/From';
import Navbar from './components/Navbar';

function App() {
  const [bg, setBg] = useState("white");
  const [back, setBack] = useState("white");
  const toggle = () => {
    if (bg === "white") {
      setBg("#212529");
      setBack("#032743");
      document.body.style.background = "#032743";
    }
    else {
      setBg("white")
      setBack("white")
      document.body.style.backgroundColor = "white";
    }
  }
   useEffect(() => {
     // Update section background color when mystyle changes
     document.body.style.backgroundColor = bg.background;
   }, [bg]);
    return (
      <>
        <Navbar mode={bg} togglemode ={toggle} />
        <From heading="analyzed the text" mode={bg} />
        <About modes={back} />
      </>
    );
}

export default App;

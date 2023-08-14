import { useState } from 'react';
import './App.css';
import About from './components/About';
import From from './components/From';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const [bg, setBg] = useState("white");
  const [back, setBack] = useState("white");
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggle = () => {
    if (bg === "white") {
      setBg("#212529");
      setBack("#032743");
      document.body.style.background = "#032743";
      showAlert(" dark mode has been enabled", "success");
    }
    else {
      setBg("white")
      setBack("white")
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  }

 
  //  useEffect(() => {
  //    // Update section background color when mystyle changes
  //    document.body.style.backgroundColor = bg.background;
  //  }, [bg]);
    return (
      <>
        <Navbar mode={bg} togglemode={toggle}  />
        <Alert alert={alert} />
        <From showAlert={showAlert} heading="analyzed the text" mode={bg} />
        <About modes={back} />
      </>
    );
}

export default App;

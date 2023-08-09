import './App.css';
import About from './components/About';
import From from './components/From';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <From heading="analyzed the text " />
      <About/>
    </>
  );
}

export default App;

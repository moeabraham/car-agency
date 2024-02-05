import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from './Pages/About/About';
import Nav from "./Components/Navbar/Nav.jsx"; 

function App() {
  return (
    // <div className="App">
     
    // </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

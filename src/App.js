import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Work from "./components/Home/Work"
import Contact from "./components/Home/Contact";
import GetinTouch from "./components/Home/GetinTouch"
import Secret from  "./components/Home/Secret"




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GetinTouch" element={<GetinTouch />} />
        <Route path="/Thisisnottheoneyouwannalookat" element={<Secret />} />
      </Routes>
    </Router>
  );
}

export default App;
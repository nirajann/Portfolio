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
import Notfound from  "./components/Home/Notfound"




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio/GetinTouch" element={<GetinTouch />} />
        <Route path="/Portfolio/Thisisnottheoneyouwannalookat" element={<Secret />} />
        <Route path="/Portfolio/Notfound" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import {Route, Router, Routes } from "react-router-dom";
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
<>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/getintouch" element={<GetinTouch />} />
        <Route path="/Thisisnottheoneyouwannalookat" element={<Secret />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
  </>
  );
}

export default App;
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Work from './components/Home/Work';
import Contact from './components/Home/Contact';
import GetinTouch from './components/Home/GetinTouch';
import Secret from './components/Home/Secret';
import Notfound from './components/Home/Notfound';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2383935875305530";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/getintouch" element={<GetinTouch />} />
          <Route path="/Thisisnottheoneyouwannalookat" element={<Secret />} />
          <Route path="*" element={<Notfound />} />
          <Route path="#/*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

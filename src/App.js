import React from "react";
import {Routes, Route} from 'react-router-dom';
import MainNavigation from "./components/layout/MainNavigation";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Products from "./pages/Products";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Faq" element={<Faq/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

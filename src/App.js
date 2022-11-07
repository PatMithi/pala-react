import React from "react";
import {Routes, Route} from 'react-router-dom';
import MainNavigation from "./components/layout/MainNavigation";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Container from "react-bootstrap/esm/Container";
import MainFooter from "./components/MainFooter";


function App() {
  return (
    <div className="d-flex flex-column site-container">
      <main>
        <MainNavigation/>
        <Container>
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Products" element={<Products/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Faq" element={<Faq/>}></Route>
        </Routes>
        </Container>
      
      </main>
      <MainFooter/>
    </div>
  );
}

export default App;

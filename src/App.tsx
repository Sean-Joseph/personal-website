import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import './App.css'; 
import { useEffect, useState } from "react";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if(menuActive) {
      document.body.classList.add('menuOpen')
    } else {
      document.body.classList.remove('menuOpen')
    }
  })
  
  return (
    <>
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
      <main>
        <Home/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App

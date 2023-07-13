import { BrowserRouter } from "react-router-dom"

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black text-white">
        <div className="bg-about-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About />
        </div>
        <Project />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
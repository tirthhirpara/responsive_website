import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Projects";
import Contact from "./Contact";
import Jack from "./Jack";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/jack" element={ <Jack/> } />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Button from "./components/Button";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { FaLongArrowAltUp } from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
        </Routes> */}
        {/* <Home />
      <About />
      <Projects /> */}
        {/* <Button type="arrow">
        <FaLongArrowAltUp />
        </Button> */}
        {/* <Route path="home" element={<Home />} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

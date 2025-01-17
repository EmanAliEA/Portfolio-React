import "./App.css";
import About from "./components/About";
import Button from "./components/Button";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { FaLongArrowAltUp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Button type="arrow">
        <FaLongArrowAltUp />
      </Button>
      {/* <Route path="home" element={<Home />} /> */}
    </div>
  );
}

export default App;

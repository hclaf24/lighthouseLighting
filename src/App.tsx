import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Nav";
import About from "./pages/About"
import Home from "./pages/Home"
import Lights from "./pages/Lights"
import Custom from "./pages/CustomDesigns"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lights" element={<Lights />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
);
}

export default App

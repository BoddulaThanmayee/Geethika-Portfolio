
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

import SmartCart from "./pages/SmartCart";
import SpendWise from "./pages/SpendWise";
import SmartAmbulanceRoute from "./pages/SmartAmbulanceRoute";

import Certifications from "./pages/Certifications";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />

        <Route
          path="/projects/smartcart"
          element={<SmartCart />}
        />

        <Route
          path="/projects/spendwise"
          element={<SpendWise />}
        />

        <Route
          path="/projects/smart-ambulance-route"
          element={<SmartAmbulanceRoute />}
        />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

        <Route
          path="/leadership"
          element={<Leadership />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
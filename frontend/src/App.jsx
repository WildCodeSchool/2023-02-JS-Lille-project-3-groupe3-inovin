import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import FicheDegustation from "./pages/FicheDegustation";
import AtelierCreation from "./pages/AtelierCreation";
import LivreDor from "./pages/LivreDor";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/FicheDegustation" element={<FicheDegustation />} />
          <Route path="/AtelierCreation" element={<AtelierCreation />} />
          <Route path="/LivreDor" element={<LivreDor />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

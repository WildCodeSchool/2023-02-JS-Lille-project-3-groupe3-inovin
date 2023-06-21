import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inscription from "./pages/Inscription/Inscription";
import FicheDegustation from "./pages/FicheDegustation/FicheDegustation";
import AtelierCreation from "./pages/AtelierCreation/AtelierCreation";
import LivreDor from "./pages/LivreDor/LivreDor";
import Resume from "./pages/Resume/Resume";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin/Admin";

import { LogingProvider } from "./contexts/LogingContext";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="backgroundHeader">
          <LogingProvider>
            <Navbar />
          </LogingProvider>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/FicheDegustation" element={<FicheDegustation />} />
          <Route path="/AtelierCreation" element={<AtelierCreation />} />
          <Route path="/LivreDor" element={<LivreDor />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import Inscription from "./pages/Inscription/Inscription";
import FicheDegustation from "./pages/FicheDegustation/FicheDegustation";
import AtelierCreation from "./pages/AtelierCreation/AtelierCreation";
import LivreDor from "./pages/LivreDor/LivreDor";
import Resume from "./pages/Resume/Resume";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin/Admin";
import AdminAjoutVin from "./pages/AdminAjoutVin/AdminAjoutVin";
import { LogingProvider } from "./contexts/LogingContext";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

import "./App.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div>
            <div className={`backgroundHeader ${theme}`}>
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
              <Route path="/AdminAjoutVin" element={<AdminAjoutVin />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

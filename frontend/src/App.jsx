// App.js
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
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
import "./App.css";
import "./LightMode.scss";
import { UserProvider } from "./contexts/UserContext";
import { BottleProvider } from "./contexts/BottleContext";
import { LightModeContext } from "./contexts/LightModeContext";

function LightModeWrapper({ children }) {
  const { lightMode } = useContext(LightModeContext);
  useEffect(() => {
    document.body.style.backgroundColor = lightMode ? "white" : "#3e3e3e";
  }, [lightMode]);
  return <div className={lightMode ? "lightMode" : "darkMode"}>{children}</div>;
}

function App() {
  return (
    <UserProvider>
      <LightModeWrapper>
        <BottleProvider>
          <Router>
            <Navbar />
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
          </Router>
        </BottleProvider>
      </LightModeWrapper>
    </UserProvider>
  );
}

export default App;

LightModeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import FinInfo from "./pages/FinInfo";
import Home from "./pages/Home";
import Report from "./pages/Report";
import FinPermissions from "./pages/FinPermissions";
import Features from "./pages/Features";
import FAQs from "./pages/FAQ";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
        <Report />
        <FinInfo />
        <FinPermissions />
        <Routes>
          <Route
            path="/features"
            element={<Features />}
          />
        </Routes>
        <FAQs />
        <Footer />
      </Router>
    </>
  );
}

export default App;
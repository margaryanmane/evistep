import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import FinInfo from "./pages/FinInfo";
import Home from "./pages/Home";
import Report from "./pages/Report";
import FinPermissions from "./pages/FinPermissions";
import Features from "./pages/Features";
import FAQs from "./pages/FAQ";
import TimeTracker from "./pages/TimeTracker";
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
        <Features />
        <FAQs />
        <TimeTracker />
        <Footer />
      </Router>
    </>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import FinInfo from "./pages/FinInfo";
import Home from "./pages/Home";
import Report from "./pages/Report";

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
          {/* <Route
            path="/"
            element={<Report />}
          /> */}
        </Routes>
        <Report/>
        <FinInfo />
      </Router>
    </>
  );
}

export default App;
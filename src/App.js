import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import CategoryPage from "../src/pages/CategoryPage";
import CompanyDetails from "../src/pages/CompanyDetails";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ContactPage from "../src/pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GreenSolutionHero from "./components/GreenSolutionHero";
import Value from "./components/Value";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactPage from "./pages/contactPage";
import ClimateConsultancy from "./components/ClimateConsultancy";
import AdvancedModelling from "./components/AdvancedModelling";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <GreenSolutionHero />
                <Value />
                <Services />
                <ClimateConsultancy />
                <AdvancedModelling />
                <Footer />
              </>
            }
          />
          {/* Contact Route */}
          <Route
            path="/contact"
            element={<ContactPage />} // Only render the ContactPage
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

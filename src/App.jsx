import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GreenSolutionHero from "./components/GreenSolutionHero";
import Value from "./components/Value";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactPage from "./pages/contactPage";
import ClimateConsultancy from "./components/ClimateConsultancy";
import AdvancedModelling from "./components/AdvancedModelling";
import InnovationServices from "./components/InnovationServices";
import RenewableEnergyServices from "./components/RenewableEnergyServices";
import ESGServices from "./components/ESGServices";
import ClimateFinanceServices from "./components/ClimateFinanceServices";
import CarbonMarketServices from "./components/CarbonMarketServices";

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
                <InnovationServices />
                <RenewableEnergyServices />
                <ESGServices />
                <ClimateFinanceServices />
                <CarbonMarketServices />
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

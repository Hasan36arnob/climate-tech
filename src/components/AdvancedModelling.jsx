import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModellingCard = ({ title, items, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-400/50 shadow-lg shadow-emerald-400/10"
          : "bg-white/5 border border-white/10 hover:border-emerald-400/30"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg text-white/90">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-emerald-400 text-emerald-900 p-2 rounded-full shadow-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

const AdvancedModelling = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const modellingServices = [
    {
      id: "hydrological",

      items: [
        "River & Flood Modelling",
        "Climate Model Downscaling",
        "Drainage Modelling",
      ],
    },
    {
      id: "environmental",

      items: [
        "Fire Hazard Modelling",
        "Drought Modelling",
        "Environmental Modelling ",
      ],
    },
    {
      id: "land-use",

      items: [
        "Rainfall-Runoff Modelling",
        "Land Use/Cover Modelling",
        "Crop Modelling",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-800 via-green-600 to-green-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r "></div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-400/10 text-emerald-300 text-sm font-medium mb-6"></span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced <span className="text-emerald-400">Modelling</span>{" "}
            Services
          </h2>
          <p className="text-xl text-gray-300/80 max-w-3xl mx-auto">
            Data-driven environmental modeling for informed decision-making
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {modellingServices.map((service) => (
            <ModellingCard
              key={service.id}
              title={service.title}
              items={service.items}
              isSelected={selectedCard === service.id}
              onClick={() => setSelectedCard(service.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 text-center"
            >
              <button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-400/30">
                Get {modellingServices.find((s) => s.id === selectedCard).title}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AdvancedModelling;

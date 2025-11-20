import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";
import FeatureHighlight from "../components/home/FeatureHighlight";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
        
      <InfoSection />

      <FeatureHighlight />


      {/* CTA Section */}
      <section className="text-center py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h3 className="text-4xl font-bold mb-6">Start Teaching Smarter</h3>
        <p className="text-lg mb-8 opacity-90">
          Experience the next generation of online classrooms with seamless
          tools for collaboration and engagement.
        </p>
        <Link
          to="/register"
          className="px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Try It Free
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

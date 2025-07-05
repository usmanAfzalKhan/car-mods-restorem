// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage         from './pages/HomePage';
import AboutPage        from './pages/AboutPage';
import ServicesPage     from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';  // ← import the detail page
import ReviewsPage      from './pages/ReviewsPage';
import ContactPage      from './pages/ContactPage';
import FaqPage          from './pages/FaqPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main className="App-content" style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/"             element={<HomePage />}           />
            <Route path="/about"        element={<AboutPage />}          />
            <Route path="/services"     element={<ServicesPage />}       />
            {/* ← Here’s the new detail route: */}
            <Route path="/services/:id" element={<ServiceDetailPage />}  />
            <Route path="/reviews"      element={<ReviewsPage />}        />
            <Route path="/contact"      element={<ContactPage />}        />
            <Route path="/faq"          element={<FaqPage />}            />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

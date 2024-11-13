import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Landing/Navbar';
import Header from './components/Landing/Header';
import Features from './components/Landing/Features';
import ContactForm from './components/Landing/ContactForm';
import Footer from './components/Landing/Footer';
import Login from './components/Login/Login';
import './App.css';
import LoginNavbar from './components/Login/LoginNavbar';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './components/Register/Register';
import TermsAndConditions from './components/Legal/TermsAndConditions';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardNavbar from './components/Dashboard/DashboardNavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Navbar para las rutas de login, registro y términos */}
          <Route path="/login" element={<LoginNavbar />} />
          <Route path="/forgot-password" element={<LoginNavbar />} />
          <Route path="/register" element={<LoginNavbar />} />
          <Route path="/terms" element={<LoginNavbar />} />

          {/* Navbar del dashboard, solo se muestra en la ruta /dashboard */}
          <Route path="/dashboard" element={<DashboardNavbar />} /> 

          {/* Navbar principal para el landing */}
          <Route path="*" element={<Navbar />} />
        </Routes>

        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={
            <>
              <Header />
              <Features />
              <ContactForm />
              <Footer />
            </>
          } />

          {/* Rutas adicionales */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          
          {/* Ruta única para el dashboard */}
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
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
import SelectLevel from './components/SelectLevel/SelectLevel';
import SelectCategory from './components/SelectCategory/SelectCategory';
import SelectSign from './components/SelectSign/SelectSign';
import PracticeSign from './components/PracticeSign/PracticeSign';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginNavbar />} />
          <Route path="/forgot-password" element={<LoginNavbar />} />
          <Route path="/register" element={<LoginNavbar />} />
          <Route path="/terms" element={<LoginNavbar />} />
          <Route path="/dashboard" element={<DashboardNavbar />} />
          <Route path="/select-level" element={<DashboardNavbar />} />
          <Route path="/select-category" element={<DashboardNavbar />} />
          <Route path="/select-sign" element={<DashboardNavbar />} />
          <Route path="/practice-sign" element={<DashboardNavbar />} />
          <Route path="*" element={<Navbar />} />
        </Routes>

        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Features />
              <ContactForm />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/select-level" element={<SelectLevel />} />
          <Route path="/select-category" element={<SelectCategory />} />
          <Route path="/select-sign" element={<SelectSign />} />
          <Route path="/practice-sign" element={<PracticeSign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
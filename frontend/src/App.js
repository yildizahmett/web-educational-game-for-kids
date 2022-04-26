import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ResetPassword from "./components/reset-password/ResetPassword";
import UnsecretNav from "./components/unsecret-nav/UnsecretNav";

// Secret components for testing
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <UnsecretNav />
      <br></br>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;

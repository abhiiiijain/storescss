import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import EmployeePage from "../pages/EmployeePage";
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import TransactionPage from "../pages/TransactionPage";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
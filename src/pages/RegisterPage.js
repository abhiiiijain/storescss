import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../images/logo.png";
import "../styles/RegisterPage.scss";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    shopName: "",
    shopAddress: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const result = await register(formData);
    
    if (result.success) {
      navigate("/home");
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <>
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-box">
            {/* illustration */}
            <div className="register-image">
              <img src={logo} alt="Logo" />
            </div>

            {/* Register form */}
            <div className="register-form">
              <h2>Register</h2>
              <h3>Account</h3>
              {error && <div className="error-message">{error}</div>}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <h3>Shop Details</h3>
                <input
                  type="text"
                  name="shopName"
                  placeholder="Shop Name"
                  value={formData.shopName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="shopAddress"
                  placeholder="Shop Address"
                  value={formData.shopAddress}
                  onChange={handleChange}
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
              <p>
                Existing User ?{" "}
                <Link to="/">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

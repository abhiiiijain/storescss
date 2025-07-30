import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../images/logo.png";
import "../styles/LoginPage.scss";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { login } = useAuth();
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

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate("/home");
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-box">
            {/* illustration */}
            <div className="login-image">
              <img src={logo} alt="Logo" />
            </div>

            {/* Login form */}
            <div className="login-form">
              <h2>Login</h2>
              {error && <div className="error-message">{error}</div>}
              <form onSubmit={handleSubmit}>
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
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
              <p>
                New User ?{" "}
                <Link to="/register">
                  <span>Register</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

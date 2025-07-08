import react from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/LoginPage.scss";

export default function LoginPage() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-box">
            {/* illustration */}
            <div className="login-image">
              <img src={logo} alt="Logo" />
            </div>

            {/* Login from */}
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
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

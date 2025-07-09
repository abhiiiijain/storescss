import react from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/RegisterPage.scss";

export default function RegisterPage() {
  return (
    <>
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-box">
            {/* illustration */}
            <div className="register-image">
              <img src={logo} alt="Logo" />
            </div>

            {/* Login from */}
            <div className="register-form">
              <h2>Register</h2>
              <h3>Account</h3>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </form>
                <h3>Shop Details</h3>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Address" required />
                <button type="submit">Register</button>
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

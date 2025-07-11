import React, { useState } from "react";
import "../styles/EmployeeModal.scss";
import { PlusIcon, XIcon } from "@heroicons/react/outline";
export default function EmployeeAddModal({ isOpen, onClose, onRegister }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    type: "Employee",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add simple validation if needed before onRegister
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onRegister(form);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      age: "",
      type: "Employee",
    });
    onClose();
  };

  return (
    <>
      {/* Modal backdrop */}
      <div className="modal-backdrop" onClick={onClose}></div>
      {/* Modal */}
      <div className="modal-wrapper">
        <div className="modal-container">
          <h2 className="modal-title">Add Employee</h2>
          <form onSubmit={handleSubmit} className="modal-form">
            {/* Account and fields */}
            <div className="form-grid">
              <label className="form-lable">Account</label>
              <div className="form-fields">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={form.gender}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={form.age}
                  onChange={handleChange}
                  min="0"
                  max="120"
                />
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="Manager"
                      checked={form.type === "Manager"}
                      onChange={handleChange}
                    />
                    <span>Manager</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="Employee"
                      checked={form.type === "Employee"}
                      onChange={handleChange}
                    />
                    <span>Employee</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-footer">
              <button type="submit" className="register">
                Register
              </button>
            </div>
          </form>
          {/* Close button top right */}
          <button onClick={onClose} aria-label="Close modal" className="close">
            <XIcon className="icon" />
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
import EmployeeAddModal from "../components/EmployeeModal";
import "../styles/Employee.scss";

const employeesData = [
  {
    id: 1,
    name: "Pat Black",
    gender: "Male",
    email: "bill.berry@example.com",
    age: 28,
  },
  {
    id: 2,
    name: "Angel Jones",
    gender: "Female",
    email: "glen.ramirez@example.com",
    age: 36,
  },
  {
    id: 3,
    name: "Max Edwards",
    gender: "Female",
    email: "renee.hughes@example.com",
    age: 27,
  },
  {
    id: 4,
    name: "Bruce Fox",
    gender: "Male",
    email: "craig.kelley@example.com",
    age: 43,
  },
  {
    id: 5,
    name: "Devon Fisher",
    gender: "Male",
    email: "joy.ramos@example.com",
    age: 32,
  },
];

export default function EmployeePage() {
  const [employees, setEmployees] = useState(employeesData);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAddForm = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddEmployee = (form) => {
    const newEmployee = {
      id: Math.max(...employees.map((e) => e.id), 0) + 1,
      name: `${form.firstName} ${form.lastName}`,
      gender: form.gender,
      email: form.email,
      age: Number(form.age),
      type: form.type,
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <>
      <div className="employee-container">
        {/* SideBar */}
        <Sidebar />
        {/* Main Content */}
        <div className="employee-main">
          <main className="employee-content">
            <h2 className="employee-title">Employees</h2>

            {/* Employees Table */}
            <div className="employee-table">
              <table>
                <thead>
                  <th></th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Age</th>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp.id}>
                      <td className="actions">
                        <button
                          // onClick={() => onEdit(emp.id)}
                          aria-label={`Edit ${emp.name}`}>
                          <PencilIcon className="icon" />
                        </button>
                        <button
                          // onClick={() => onDelete(emp.id)}
                          aria-label={`Delete ${emp.name}`}
                          className="delete">
                          <TrashIcon className="icon " />
                        </button>
                      </td>
                      <td>{emp.name}</td>
                      <td>{emp.gender}</td>
                      <td>{emp.email}</td>
                      <td>{emp.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {editingId === null && (
              <button
                onClick={openAddForm}
                aria-label="Add employee"
                className="modal">
                <PlusIcon className="picon" />
              </button>
            )}
            {/* Add Modal */}
            <EmployeeAddModal
              isOpen={isModalOpen}
              onClose={closeModal}
              onRegister={handleAddEmployee}
            />
          </main>
        </div>
      </div>
    </>
  );
}

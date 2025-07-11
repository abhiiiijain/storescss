import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "../styles/Inventory.scss";

const inventoryData = [
  {
    id: 1,
    product: "Pat Black",
    items: 25,
    price: 450,
    expiryDate: "2025-07-05",
  },
  {
    id: 2,
    product: "Angel Jones",
    items: 66,
    price: 325,
    expiryDate: "2025-07-15",
  },
  {
    id: 3,
    product: "Max Edwards",
    items: 3,
    price: 25,
    expiryDate: "2025-07-30",
  },
  {
    id: 4,
    product: "Bruce Fox",
    items: 120,
    price: 1500,
    expiryDate: "2025-07-20",
  },
  {
    id: 5,
    product: "Devon Fisher",
    items: 15,
    price: 999,
    expiryDate: "2025-07-15",
  },
];

// Utility to check if expiry date is near (within 30 days from today)
const isNearExpiry = (expiryDate) => {
  const today = new Date();
  const expiry = new Date(expiryDate);

  today.setHours(0, 0, 0, 0); // Normalize today's date for comparison
  expiry.setHours(0, 0, 0, 0); // Normalize expiry date for comparison
  const diffTime = expiry - today;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= 30 && diffDays >= 0;
};

export default function Inventory() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredData =
    activeTab === "near-expiry"
      ? inventoryData.filter((item) => isNearExpiry(item.expiryDate))
      : inventoryData;

  return (
    <>
      <div className="inventory-container">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        {/* <div classname="invntory-main"> */}
        <main className="inventory-content">
          {/* Inventory header and tabs */}
          <h2 className="inventory-title">Inventory</h2>
          <div className="inventory-category">
            <button
              className={activeTab === "all" ? "active" : "inactive"}
              onClick={() => setActiveTab("all")}
              aria-current={activeTab === "all" ? "page" : undefined}>
              All
            </button>
            <button
              className={activeTab === "near-expiry" ? "active" : "inactive"}
              onClick={() => setActiveTab("near-expiry")}
              aria-current={activeTab === "near-expiry" ? "page" : undefined}>
              Near Expiry
            </button>
          </div>
          {/* Inventory Table */}
          <div className="inventory-table">
            <table>
              <thead>
                {activeTab === "all" && <th />}
                <th>Product</th>
                <th>Items</th>
                <th>{activeTab === "all" ? "Price" : "Days Left"}</th>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="empty">
                      No items found.
                    </td>
                  </tr>
                ) : (
                  filteredData.map(
                    ({ id, product, items, price, expiryDate }) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0); // Normalize today's date for comparison
                      const expiry = new Date(expiryDate);
                      expiry.setHours(0, 0, 0, 0); // Normalize expiry date for comparison
                      const daysLeft = Math.ceil(
                        (expiry - today) / (1000 * 60 * 60 * 24)
                      );
                      return (
                        <tr key={id}>
                          {activeTab === "all" && (
                            <td className="actions">
                              <button aria-label={`Edit ${product}`}>
                                <PencilIcon className="icon" />
                              </button>
                              <button
                                aria-label={`Delete ${product}`}
                                className="delete">
                                <TrashIcon className="icon" />
                              </button>
                            </td>
                          )}
                          <td>{product}</td>
                          <td>{items}</td>
                          <td>
                            {activeTab === "near-expiry"
                              ? `${daysLeft}`
                              : //  day${daysLeft !== 1 ? "s" : ""} left`
                                `₹${price.toFixed(2)}`}
                          </td>
                        </tr>
                      );
                    }
                  )
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      {/* </div> */}
    </>
  );
}

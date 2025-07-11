import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { DownloadIcon } from "@heroicons/react/outline";
import "../styles/Transaction.scss"

const transactions = [
  {
    id: 1,
    date: "25 Dec 2020",
    product: "Pat Black",
    items: 25,
    price: "₹450.00",
    type: "Buy",
  },
  {
    id: 2,
    date: "26 Dec 2020",
    product: "Angel Jones",
    items: 66,
    price: "₹325.00",
    type: "Sell",
  },
  {
    id: 3,
    date: "26 Dec 2020",
    product: "Max Edwards",
    items: 3,
    price: "₹25.00",
    type: "Buy",
  },
  {
    id: 4,
    date: "26 Dec 2020",
    product: "Bruce Fox",
    items: 120,
    price: "₹1500.00",
    type: "Sell",
  },
  {
    id: 5,
    date: "27 Dec 2020",
    product: "Devon Fisher",
    items: 15,
    price: "₹999.00",
    type: "Buy",
  },
];

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="transaction-container">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      {/* <div classname="transaction-main"> */}
      <div className="transaction-content">
        {/* Transaction header and tabs */}
        <h2 className="transaction-title">Transactions</h2>
        <div className="transaction-category">
          <button
            className={activeTab === "buy" ? "active" : "inactive"}
            onClick={() => setActiveTab("buy")}
            aria-current={activeTab === "buy" ? "page" : undefined}>
            Buy
          </button>
          <button
            className={activeTab === "sell" ? "active" : "inactive"}
            onClick={() => setActiveTab("sell")}
            aria-current={activeTab === "sell" ? "page" : undefined}>
            Sell
          </button>
          <button
            className={activeTab === "history" ? "active" : "inactive"}
            onClick={() => setActiveTab("history")}
            aria-current={activeTab === "history" ? "page" : undefined}>
            History
          </button>
        </div>

        {/* Buy */}
        {activeTab === "buy" && (
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Buy Items
            </h2>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Customer */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Customer</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Product */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Product</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  {/* <select className="w-full p-2 border bg-gray-300 rounded mb-2">
                    <option>Select a product to view details</option>
                    <option>20 in inventory, 85 Recommended limit</option>
                    <option>No details</option>
                  </select> */}

                  <div className="text-sm text-gray-600 mb-2 overflow-auto text-center">
                    <p>Select a product to view details</p>
                    <p>/</p>
                    <p>20 in inventory, 85 Recommended limit</p>
                    <p>/</p>
                    <p>No details</p>
                  </div>

                  <input
                    type="text"
                    placeholder="Price"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="number"
                    placeholder="No. of Items"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="date"
                    placeholder="Expiry Date"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <div className="flex justify-center">
                    <button className="text-primary text-sm p-2 underline border border-primary">
                      + Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-primary text-white p-2 w-24 text-center rounded-full ">
                Buy
              </button>
            </div>
          </div>
        )}
        {/* Sell */}
        {activeTab === "sell" && (
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Sell Items
            </h2>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Customer */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Customer</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 mb-6 flex gap-8"></div>

            {/* Product */}
            <div className="mb-6">
              <div className="bg-white max-w-xl mx-auto flex rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-medium mb-2">Product</h3>
                </div>
                <div className="flex-1 p-6">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  {/* <select className="w-full p-2 border bg-gray-300 rounded mb-2">
                    <option>Select a product to view details</option>
                    <option>20 in inventory, 85 Recommended limit</option>
                    <option>No details</option>
                  </select> */}

                  <div className="text-sm text-gray-600 mb-2 overflow-auto text-center">
                    <p>Select a product to view details</p>
                    <p>/</p>
                    <p>20 in inventory, 85 Critical limit</p>
                    <p>/</p>
                    <p>No details</p>
                  </div>

                  <input
                    type="text"
                    placeholder="Price"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="number"
                    placeholder="No. of Items"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <input
                    type="date"
                    placeholder="Expiry Date"
                    className="w-full p-2 border bg-gray-300 rounded mb-2"
                  />
                  <div className="flex justify-center">
                    <button className="text-primary text-sm p-2 underline border border-primary">
                      + Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-primary text-white p-2 w-24 text-center rounded-full ">
                Sell
              </button>
            </div>
          </div>
        )}

        {/* History */}
        {activeTab === "history" && (
          <div className="transaction-table">
            <table>
              <thead>
                <th>ID</th>
                <th></th>
                <th>Date</th>
                <th>Product</th>
                <th>Items</th>
                <th>Price</th>
                <th>Type</th>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>
                      <button
                        aria-label="Download Transaction"
                        className="p-1 text-gray-600 hover:text-primary">
                        <DownloadIcon className="h-5 w-5" />
                      </button>
                    </td>
                    <td>{transaction.date}</td>
                    <td>{transaction.product}</td>
                    <td>{transaction.items}</td>
                    <td>{transaction.price}</td>
                    <td>{transaction.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

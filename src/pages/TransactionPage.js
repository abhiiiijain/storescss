import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { DownloadIcon } from "@heroicons/react/outline";
import "../styles/Transaction.scss";

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
          <div className="buy-container">
            <h2 className="buy-title">Buy Items</h2>
            <div classname="line"></div>

            {/* Customer */}
            <div className="buy-wrapper">
              <div className="buy-content">
                <div className="buy-items">
                  <h3 className="buy-subtitle">Customer</h3>
                </div>
                <div className="buy-items">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Phone Number" />
                  <input type="text" placeholder="Address" />
                </div>
              </div>
            </div>
            <div classname="line"></div>

            {/* Product */}
            <div className="buy-wrapper">
              <div className="buy-content">
                <div className="buy-items">
                  <h3 className="buy-subtitle">Product</h3>
                </div>
                <div className="buy-items">
                  <input type="text" placeholder="Product Name" />
                  <div className="limit">
                    <p>Select a product to view details</p>
                    <p>/</p>
                    <p>20 in inventory, 85 Recommended limit</p>
                    <p>/</p>
                    <p>No details</p>
                  </div>
                  <input type="text" placeholder="Price" />
                  <input type="number" placeholder="No. of Items" />
                  <input type="date" placeholder="Expiry Date" />
                  <div className="add">
                    <button>+ Add Product</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit">
              <button>Buy</button>
            </div>
          </div>
        )}
        {/* Sell */}
        {activeTab === "sell" && (
          <div className="buy-container">
            <h2 className="buy-title">Sell Items</h2>
            <div classname="line"></div>

            {/* Customer */}
            <div className="buy-wrapper">
              <div className="buy-content">
                <div className="buy-items">
                  <h3 className="buy-subtitle">Customer</h3>
                </div>
                <div className="buy-items">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Phone Number" />
                  <input type="text" placeholder="Address" />
                </div>
              </div>
            </div>
            <div classname="line"></div>

            {/* Product */}
            <div className="buy-wrapper">
              <div className="buy-content">
                <div className="buy-items">
                  <h3 className="buy-subtitle">Product</h3>
                </div>
                <div className="buy-items">
                  <input type="text" placeholder="Product Name" />

                  <div className="limit">
                    <p>Select a product to view details</p>
                    <p>/</p>
                    <p>20 in inventory, 85 Critical limit</p>
                    <p>/</p>
                    <p>No details</p>
                  </div>

                  <input type="text" placeholder="Price" />
                  <input type="number" placeholder="No. of Items" />
                  <input type="date" placeholder="Expiry Date" />
                  <div className="add">
                    <button>+ Add Product</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit">
              <button>Sell</button>
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

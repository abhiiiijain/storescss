import React from "react";
import SideBar from "../components/Sidebar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import "../styles/HomePage.scss";

const salesProfitData = [
  { name: "0", Sales: 0, Profit: 750 },
  { name: "1", Sales: 100, Profit: 468 },
  { name: "2", Sales: 750, Profit: 750 },
  { name: "3", Sales: 1482, Profit: 1359 },
  { name: "4", Sales: 70, Profit: 156 },
  { name: "5", Sales: 1201, Profit: 1675 },
  { name: "6", Sales: 1875, Profit: 180 },
  { name: "7", Sales: 1310, Profit: 1436 },
  { name: "8", Sales: 597, Profit: 457 },
  { name: "9", Sales: 1372, Profit: 1761 },
  { name: "10", Sales: 1217, Profit: 1373 },
  { name: "11", Sales: 1034, Profit: 626 },
  { name: "12", Sales: 1742, Profit: 1383 },
  { name: "13", Sales: 141, Profit: 442 },
  { name: "14", Sales: 532, Profit: 95 },
  { name: "15", Sales: 1221, Profit: 1040 },
  { name: "16", Sales: 1153, Profit: 1275 },
  { name: "17", Sales: 716, Profit: 946 },
  { name: "18", Sales: 703, Profit: 1183 },
  { name: "19", Sales: 506, Profit: 238 },
  { name: "20", Sales: 407, Profit: 839 },
  { name: "21", Sales: 977, Profit: 1032 },
  { name: "22", Sales: 471, Profit: 199 },
  { name: "23", Sales: 401, Profit: 274 },
  { name: "24", Sales: 1040, Profit: 1102 },
  { name: "25", Sales: 622, Profit: 547 },
  { name: "26", Sales: 288, Profit: 777 },
  { name: "27", Sales: 535, Profit: 462 },
  { name: "28", Sales: 390, Profit: 162 },
  { name: "29", Sales: 1882, Profit: 1926 },
  { name: "30", Sales: 826, Profit: 919 },
  { name: "31", Sales: 957, Profit: 1210 },
  { name: "32", Sales: 1329, Profit: 1197 },
  { name: "33", Sales: 1844, Profit: 1782 },
  { name: "34", Sales: 355, Profit: 255 },
  { name: "35", Sales: 721, Profit: 841 },
  { name: "36", Sales: 1089, Profit: 1302 },
  { name: "37", Sales: 279, Profit: 551 },
  { name: "38", Sales: 1880, Profit: 1486 },
  { name: "39", Sales: 1645, Profit: 1543 },
  { name: "40", Sales: 1804, Profit: 1349 },
  { name: "41", Sales: 1081, Profit: 1510 },
  { name: "42", Sales: 1940, Profit: 1903 },
  { name: "43", Sales: 552, Profit: 801 },
  { name: "44", Sales: 687, Profit: 1114 },
  { name: "45", Sales: 1090, Profit: 1380 },
  { name: "46", Sales: 1138, Profit: 1547 },
  { name: "47", Sales: 773, Profit: 593 },
  { name: "48", Sales: 1177, Profit: 880 },
  { name: "49", Sales: 542, Profit: 1055 },
];

const productSalesData = [
  { name: "0", sales: 850 },
  { name: "1", sales: 400 },
  { name: "2", sales: 350 },
  { name: "3", sales: 400 },
  { name: "4", sales: 100 },
  { name: "5", sales: 450 },
  { name: "6", sales: 50 },
  { name: "7", sales: 300 },
  { name: "8", sales: 400 },
  { name: "9", sales: 150 },
  { name: "10", sales: 200 },
];

export default function HomePage() {
  return (
    <>
      <div className="home-container">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content */}
        {/* <div className="home-main"> */}
        <main className="home-content">
          <h2 className="home-title">Home</h2>
          {/* Sales and Profit Chart */}
          <div className="home-details">
            <h2 className="home-subtitle">Sales and Profit</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={salesProfitData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a0522d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#a0522d" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#63b3ed" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#63b3ed" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 2000]} tickCount={6} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Sales"
                  stroke="#a0522d"
                  fillOpacity={1}
                  fill="url(#colorSales)"
                />
                <Area
                  type="monotone"
                  dataKey="Profit"
                  stroke="#63b3ed"
                  fillOpacity={1}
                  fill="url(#colorProfit)"
                />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Product Sales Chart */}
          <div className="home-details">
            <h2 className="home-subtitle">Product Sales</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={productSalesData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#63b3ed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
      {/* </div> */}
    </>
  );
}

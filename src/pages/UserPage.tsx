import React from "react";
import {
  LineChart, Line,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,
} from "recharts";


const dailyAccessData = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 210 },
  { day: "Wed", users: 180 },
  { day: "Thu", users: 260 },
  { day: "Fri", users: 320 },
  { day: "Sat", users: 150 },
  { day: "Sun", users: 90 },
];

const monthlyAccessData = [
  { month: "Jan", users: 2400 },
  { month: "Feb", users: 3100 },
  { month: "Mar", users: 2800 },
  { month: "Apr", users: 3600 },
  { month: "May", users: 4200 },
  { month: "Jun", users: 3900 },
];

const totalDailyAccess = dailyAccessData.reduce(
  (sum, item) => sum + item.users,
  0
);

const totalMonthlyAccess = monthlyAccessData.reduce(
  (sum, item) => sum + item.users,
  0
);

/* -----------------------------
   User Page Component
-------------------------------- */

const UserPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          User Access Analytics
        </h1>
        <p className="text-gray-500 mt-1">
          Monitor daily and monthly user activity
        </p>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500">Total Access (This Week)</p>
          <h2 className="text-3xl font-semibold text-gray-800 mt-2">
            {totalDailyAccess}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500">Total Access (This Year)</p>
          <h2 className="text-3xl font-semibold text-gray-800 mt-2">
            {totalMonthlyAccess}
          </h2>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daily Access Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Daily User Access
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyAccessData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                strokeWidth={3}
                stroke="#6366f1"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Access Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Monthly User Access
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyAccessData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default UserPage;

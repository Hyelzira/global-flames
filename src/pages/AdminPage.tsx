import React, { useState } from "react";
import { FiLock, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { LayoutDashboard, ShieldCheck, Database, Users as UsersIcon } from "lucide-react";
import UserPage from "./UserPage";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid admin credentials");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#120d31] px-4 font-sans">
        <form
          onSubmit={handleLogin}
          className="bg-[#1c1642] p-9 rounded-2xl shadow-2xl w-full max-w-md border border-white/5"
        >
          <div className="flex flex-col items-center mb-4">
            <div className="bg-fuchsia-600 p-3 rounded-2xl mb-4">
              <FiLock className="text-2xl text-white" />
            </div>
            <h1 className="text-gray-300 text-2xl font-bold">Admin Portal</h1>
            <p className="text-gray-400 text-sm">Enter credentials to access</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-xl mb-6 text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#251d53] rounded-xl px-4 py-3 text-white focus:outline-none"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#251d53] rounded-xl px-4 py-3 text-white focus:outline-none"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="w-full bg-linear-to-r from-fuchsia-600 to-purple-600 py-3 rounded-xl font-bold"
            >
              Access Dashboard
            </button>
          </div>
        </form>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="space-y-8">

            {/* ADMIN PROFILE */}
            <div className="flex justify-between items-center bg-[#1c1642] border border-white/5 rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <img
                  src="./assets/image/hyelzira.jpg"
                  className="w-14 h-14 rounded-2xl border border-fuchsia-500/40"
                />
                <div>
                  <h3 className="font-bold">System Administrator</h3>
                  <p className="text-xs text-gray-400">Full Access</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-gray-400">Last Login</p>
                <p className="font-semibold">Today, 09:42 AM</p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Daily Access" value="482" percentage={12} color="from-indigo-500 to-blue-600" />
              <StatCard label="Monthly Access" value="9,284" percentage={18} color="from-emerald-400 to-teal-500" />
              <StatCard label="Total Users" value="1,947" percentage={8} color="from-fuchsia-500 to-pink-600" />
              <StatCard label="Pending Logs" value="36" percentage={-3} color="from-amber-400 to-orange-500" />
            </div>

            {/* DAILY ACCESS CHART */}
            <div className="bg-[#1c1642] border border-white/5 rounded-3xl p-6">
              <h4 className="font-semibold mb-6 text-sm">User Access Per Day</h4>
              <div className="flex items-end gap-3 h-40">
                {[40, 55, 48, 70, 62, 85, 75].map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      style={{ height: `${v}%` }}
                      className="w-full rounded-xl bg-linear-to-t from-fuchsia-600 to-purple-500"
                    />
                    <span className="text-[10px] text-gray-400">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Users":
        return <UserPage />;

      default:
        return (
          <PlaceholderPage
            title={activeTab}
            desc="Module currently under maintenance."
            icon={<ShieldCheck size={40} />}
          />
        );
    }
  };

  return (
    <div className="h-screen bg-[#120d31] text-white flex overflow-hidden font-sans relative">
      <button
        className="lg:hidden absolute top-4 right-4 z-50 p-2 bg-fuchsia-600 rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FiX /> : <FiMenu />}
      </button>

      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#1c1642] p-6 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-fuchsia-600 rounded-lg flex items-center justify-center">
            <ShieldCheck size={18} />
          </div>
          <span className="font-bold text-xl">AdminPanel</span>
        </div>

        <nav className="space-y-2">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active={activeTab === "Dashboard"} onClick={() => setActiveTab("Dashboard")} />
          <SidebarItem icon={<UsersIcon size={18} />} label="Users" active={activeTab === "Users"} onClick={() => setActiveTab("Users")} />
          <SidebarItem icon={<Database size={18} />} label="Logs" active={activeTab === "Logs"} onClick={() => setActiveTab("Logs")} />
        </nav>

        <button onClick={() => setIsAuthenticated(false)} className="absolute bottom-8 left-6 flex items-center gap-3 text-gray-400 hover:text-white">
          <FiLogOut /> Logout
        </button>
      </aside>

      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">{activeTab}</h2>
          <p className="text-gray-400 text-sm">Welcome back, Hyelzira</p>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

/* HELPERS */

const SidebarItem = ({ icon, label, active, onClick }: any) => (
  <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer ${active ? "bg-fuchsia-600" : "text-gray-400 hover:bg-white/5"}`}>
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

const StatCard = ({ label, value, percentage, color }: any) => (
  <div className="bg-[#1c1642]/60 border border-white/5 rounded-2xl p-5 relative">
    <div className={`absolute top-0 left-0 h-0.5 w-full bg-linear-to-r ${color}`} />
    <p className="text-[10px] uppercase text-gray-400 font-bold mb-3">{label}</p>
    <div className="flex justify-between items-end">
      <h4 className="text-2xl font-bold">{value}</h4>
      <span className="text-[10px] text-emerald-400 font-bold">
        {percentage > 0 ? "+" : ""}{percentage}%
      </span>
    </div>
  </div>
);

const PlaceholderPage = ({ title, desc, icon }: any) => (
  <div className="h-64 bg-[#1c1642] rounded-3xl flex flex-col items-center justify-center text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="font-bold text-xl">{title}</h3>
    <p className="text-sm text-gray-400">{desc}</p>
  </div>
);

export default AdminPage;

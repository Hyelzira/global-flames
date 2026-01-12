import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { 
  LayoutDashboard, ShieldCheck, UserCog, 
  Database, Laptop 
} from "lucide-react";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const [activeTab, setActiveTab] = useState("Dashboard");

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
      <div className="min-h-screen flex items-center justify-center bg-[#120d31] px-4">
        <form
          onSubmit={handleLogin}
          className="bg-[#1c1642] p-9 rounded-2xl shadow-2xl w-full max-w-md border border-white/5"
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="bg-fuchsia-600 p-3 rounded-2xl shadow-lg shadow-fuchsia-500/20 mb-4">
              <FiLock className="text-2xl text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white text-center">Admin Portal</h1>
            <p className="text-gray-400 text-sm mt-1">Enter credentials to access </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-xl mb-6 text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#251d53] border border-transparent focus:border-fuchsia-500 rounded-xl px-4 py-3 text-white focus:outline-none transition"
                placeholder="admin"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#251d53] border border-transparent focus:border-fuchsia-500 rounded-xl px-4 py-3 text-white focus:outline-none transition"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-fuchsia-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:opacity-80 transition transform active:scale-[0.88] shadow-lg shadow-fuchsia-600/20"
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
          <>
            {/* RESPONSIVE GRID: 1 col on mobile, 2 on small tablets, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard label="Total Revenue" value="$58,947" percentage={75} color="from-indigo-500 to-blue-600" />
              <StatCard label="Today's Sales" value="127" percentage={55} color="from-emerald-400 to-teal-500" />
              <StatCard label="Conversion" value="0.58%" percentage={45} color="from-fuchsia-500 to-pink-600" />
              <StatCard label="Visits" value="78.4k" percentage={72} color="from-rose-500 to-orange-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
              <div className="col-span-1 lg:col-span-4 bg-[#1c1642] rounded-3xl p-5 border border-white/5 flex flex-col items-center">
                  <h3 className="text-sm font-medium w-full text-left mb-5">Access Analysis</h3>
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="80" cy="80" r="70" fill="transparent" stroke="#251d53" strokeWidth="12" />
                      <circle cx="80" cy="80" r="70" fill="transparent" stroke="url(#posGrad)" strokeWidth="12" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="posGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#d946ef" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute text-center">
                      <p className="text-2xl font-bold">80%</p>
                    </div>
                  </div>
                  <div className="w-full mt-6 pt-6 border-t border-white/5 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Total Access</span>
                      <span className="text-fuchsia-400 font-bold">80.00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Profit Margin</span>
                      <span className="text-emerald-400 font-bold">24%</span>
                    </div>
                  </div>
              </div>

              <div className="col-span-1 lg:col-span-6 bg-[#1c1642] rounded-3xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-medium">Total Analytics</h3>
                    <div className="flex bg-[#120d31] rounded-xl p-1 text-[10px] font-bold">
                       <button className="px-4 py-1.5 rounded-lg text-gray-500">Day</button>
                       <button className="px-4 py-1.5 rounded-lg bg-fuchsia-600 text-white">Month</button>
                    </div>
                  </div>
                  <div className="h-48 flex items-end justify-between gap-3 px-2">
                    {[50, 80, 45, 90, 60, 75, 55, 95, 40, 70, 85, 60].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-t-lg relative group">
                        <div 
                          style={{ height: `${h}%` }} 
                          className="bg-linear-to-t from-fuchsia-600 to-purple-500 w-full rounded-t-lg group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300"
                        ></div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </>
        );
      case "Security":
        return <PlaceholderPage title="Security Settings" desc="Manage firewalls and encryption protocols." icon={<ShieldCheck size={40}/>} />;
      case "Users":
        return <PlaceholderPage title="User Management" desc="Control permissions and account access." icon={<UserCog size={40}/>} />;
      case "Reports":
        return <PlaceholderPage title="System Reports" desc="View and export analytical data logs." icon={<Database size={40}/>} />;
      case "Devices":
        return <PlaceholderPage title="Connected Devices" desc="Monitor hardware and active sessions." icon={<Laptop size={40}/>} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#120d31] text-white flex flex-col md:flex-row p-4 font-sans">
      {/* SIDEBAR: Hidden on small mobile or adjusted for layout */}
      <aside className="w-full md:w-64 bg-[#1c1642] rounded-3xl p-6 flex flex-col shadow-2xl mb-6 md:mb-0 md:mr-6">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="bg-fuchsia-600 p-1.5 rounded-sm shadow-lg shadow-blue-500/30">
            <LayoutDashboard size={15} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">GFM YOUTH</span>
        </div>

        <nav className="space-y-1 flex-1">
          <p className="text-[10px] font-bold text-gray-500 mb-4 px-2 uppercase tracking-[2px]">Menu</p>
          <SidebarItem icon={<LayoutDashboard size={18}/>} label="Dashboard" active={activeTab === "Dashboard"} onClick={() => setActiveTab("Dashboard")} />
          <SidebarItem icon={<ShieldCheck size={18}/>} label="Security" active={activeTab === "Security"} onClick={() => setActiveTab("Security")} />
          <SidebarItem icon={<UserCog size={18}/>} label="Users" active={activeTab === "Users"} onClick={() => setActiveTab("Users")} />
          
          <p className="text-[10px] font-bold text-gray-500 mt-8 mb-4 px-2 uppercase tracking-[2px]">System</p>
          <SidebarItem icon={<Database size={18}/>} label="Reports" active={activeTab === "Reports"} onClick={() => setActiveTab("Reports")} />
          <SidebarItem icon={<Laptop size={18}/>} label="Devices" active={activeTab === "Devices"} onClick={() => setActiveTab("Devices")} />
          
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full mt-4 flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
          >
            <FiLock size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </nav>

        <div className="mt-auto hidden md:block bg-linear-to-br from-fuchsia-600 to-purple-700 p-5 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-bold text-sm mb-1">Admin Pro</h4>
              <p className="text-[10px] text-fuchsia-100 mb-3">Live support active</p>
              <button className="bg-white/20 hover:bg-white/30 text-white text-[10px] py-1.5 px-3 rounded-lg backdrop-blur-md">Status: Online</button>
            </div>
            <ShieldCheck className="absolute -right-2 -bottom-2 text-white/10" size={70} />
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 px-2">
          <h2 className="text-xl font-bold">{activeTab} Overview</h2>
          <div className="flex items-center gap-4 bg-[#1c1642] p-2 rounded-2xl pr-4 border border-white/5 w-full sm:w-auto">
             <div className="w-10 h-10 rounded-full border-2 border-fuchsia-400 bg-gray-800 shrink-0" />
             <div>
               <p className="text-sm font-bold leading-none">Wakawa Hyelzira</p>
               <p className="text-[10px] text-gray-400 uppercase tracking-tighter">System Administrator</p>
             </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active = false, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${active ? 'bg-linear-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-600/20' : 'text-gray-400 hover:bg-[#251d53] hover:text-white'}`}
  >
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

const PlaceholderPage = ({ title, desc, icon }: any) => (
  <div className="flex-1 bg-[#1c1642] rounded-3xl border border-white/5 flex flex-col items-center justify-center p-10 text-center">
    <div className="bg-fuchsia-600/10 p-6 rounded-full text-fuchsia-500 mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 max-w-sm">{desc}</p>
    <button className="mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm transition">
      Load Data...
    </button>
  </div>
);

/* NEW PROFESSIONAL STAT CARD COMPONENT */
const StatCard = ({ label, value, percentage, color }: any) => {
  return (
    <div className="relative group bg-[#1c1642]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#1c1642]/60 shadow-xl overflow-hidden">
      {/* Decorative accent line at the top */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${color}`} />
      
      <div className="relative z-10 flex flex-col">
        <p className="text-[11px] uppercase font-semibold text-gray-400 tracking-wider mb-4">
          {label}
        </p>
        <div className="flex items-end justify-between">
          <h4 className="text-2xl font-bold tracking-tight text-white">{value}</h4>
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-bold text-emerald-400">+{percentage}%</span>
            <span className="text-[8px] text-gray-500 uppercase tracking-tighter">Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
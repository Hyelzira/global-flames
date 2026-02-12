import React, { useState, useEffect } from "react";
import { FiMenu, FiLogOut, FiSearch, FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { LayoutDashboard, ShieldCheck, Database, Users as UsersIcon, User as UserIcon, ArrowLeft, Bell, Settings } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import UserPage from "./UserPage";

// Mock Data for the animated chart
const accessData = [
  { name: 'Mon', visits: 1100 }, { name: 'Tue', visits: 520 },
  { name: 'Wed', visits: 880 }, { name: 'Thu', visits: 700 },
  { name: 'Fri', visits: 610 }, { name: 'Sat', visits: 900 },
  { name: 'Sun', visits: 720 },
];

/* -----------------------------
   1. Sub-Component: LogPage
------------------------------ */
const LogPage = ({ onBack, searchQuery }: { onBack: () => void; searchQuery: string }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const allUsers = Array.from({ length: 16 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    kyc: i % 3 === 0 ? "Verified" : "Pending",
    nin: `23489012${i}x`,
    phone: `+234 803 000 ${10 + i}`,
    role: i === 0 ? "Admin" : "Member",
  }));

  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );

  return (
    <div className="animate-in fade-in duration-500 relative">
      {isAddModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0f111a]/80 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)} />
          <div className="bg-[#161925] border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl z-10 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-white font-bold">Register New System User</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-500 hover:text-white">✕</button>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsAddModalOpen(false); }}>
              <div>
                <label className="text-[10px] uppercase text-slate-500 font-bold mb-1.5 block">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#0f111a] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-blue-500 outline-none transition-all" />
              </div>
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl border border-slate-800 text-sm font-bold text-slate-400 hover:bg-slate-800 transition-all">Cancel</button>
                <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-all">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <div>
          <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">System Logs & Monitoring</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 text-[11px] font-bold bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg transition-all shadow-lg">
            <UsersIcon size={14} /> Add User
          </button>
          <button onClick={onBack} className="flex items-center gap-2 text-[11px] bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg border border-slate-700 transition-all">
            <ArrowLeft size={14} /> Back to Overview
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="group cursor-pointer bg-[#161925] border border-slate-800 p-5 rounded-xl hover:border-blue-500/50 transition-all">
             <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                <UserIcon size={15} className="text-slate-300" />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded ${user.role === "Admin" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                {user.role}
              </span>
            </div>
            <h4 className="font-bold text-sm text-white">{user.name}</h4>
            <p className="text-[10px] text-slate-500 mb-4">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* -----------------------------
   2. Sub-Component: SettingsPage
------------------------------ */
interface SettingsProps {
  avatar: string | null;
  setAvatar: (val: string | null) => void;
  adminName: string;
  setAdminName: (val: string) => void;
  adminEmail: string;
  setAdminEmail: (val: string) => void;
}

const SettingsPage = ({ avatar, setAvatar, adminName, setAdminName, adminEmail, setAdminEmail }: SettingsProps) => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(() => {
    return JSON.parse(localStorage.getItem("admin_2fa") || "false");
  });
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAvatar(base64String);
        localStorage.setItem("admin_avatar", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAll = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem("admin_name", adminName);
      localStorage.setItem("admin_email", adminEmail);
      localStorage.setItem("admin_2fa", JSON.stringify(is2FAEnabled));
      setIsSaving(false);
      alert("Changes saved successfully!");
    }, 600);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      <section className="bg-[#161925] border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 bg-slate-800/20">
          <h3 className="text-white font-bold flex items-center gap-2">
            <UserIcon size={18} className="text-blue-500" /> Admin Profile
          </h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 col-span-full mb-4">
            <div className="w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center overflow-hidden transition-all hover:border-blue-500">
              {avatar ? (
                <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-blue-500 text-2xl font-bold">{adminName.charAt(0)}</span>
              )}
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <input type="file" id="avatarInput" accept="image/*" className="hidden" onChange={handleImageChange} />
                <label htmlFor="avatarInput" className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-2 rounded-lg font-bold transition-all shadow-lg">
                  Change Avatar
                </label>
                {avatar && (
                   <button onClick={() => { setAvatar(null); localStorage.removeItem("admin_avatar"); }} className="bg-slate-800 hover:text-rose-500 text-slate-400 text-xs px-4 py-2 rounded-lg font-bold transition-all border border-slate-700">
                     Reset
                   </button>
                )}
              </div>
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase text-slate-500 font-bold mb-2 block">Display Name</label>
            <input 
              type="text" 
              value={adminName} 
              onChange={(e) => setAdminName(e.target.value)} 
              className="w-full bg-[#0f111a] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-blue-500 outline-none transition-all" 
            />
          </div>
          <div>
            <label className="text-[10px] uppercase text-slate-500 font-bold mb-2 block">Email Address</label>
            <input 
              type="email" 
              value={adminEmail} 
              onChange={(e) => setAdminEmail(e.target.value)}
              className="w-full bg-[#0f111a] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-blue-500 outline-none transition-all" 
            />
          </div>
        </div>
      </section>

      <section className="bg-[#161925] border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 bg-slate-800/20">
          <h3 className="text-white font-bold flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-500" /> Security & Access
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-sm font-bold text-slate-300">Two-Factor Authentication</h4>
              <p className="text-[10px] text-slate-500">Add an extra layer of security to your account</p>
            </div>
            <button 
              onClick={() => setIs2FAEnabled(!is2FAEnabled)}
              className={`w-12 h-6 rounded-full relative transition-all duration-300 border ${
                is2FAEnabled ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-slate-800 border-slate-700'
              }`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
                is2FAEnabled ? 'right-1 bg-emerald-500' : 'left-1 bg-slate-500'
              }`}></div>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#161925] border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 bg-slate-800/20">
          <h3 className="text-white font-bold flex items-center gap-2">
            <Settings size={18} className="text-amber-500" /> System Preferences
          </h3>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-sm font-bold text-slate-300">Maintenance Mode</h4>
              <p className="text-[10px] text-slate-500">Disable public access during updates</p>
            </div>
            <button 
              onClick={() => setIsMaintenanceMode(!isMaintenanceMode)}
              className={`w-12 h-6 rounded-full relative transition-all duration-300 border ${isMaintenanceMode ? 'bg-rose-500/20 border-rose-500/50' : 'bg-slate-800 border-slate-700'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${isMaintenanceMode ? 'right-1 bg-rose-500' : 'left-1 bg-slate-500'}`}></div>
            </button>
          </div>
          <button 
            onClick={handleSaveAll}
            disabled={isSaving}
            className={`w-full ${isSaving ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-500'} text-white py-3 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2`}
          >
            {isSaving ? "Saving Changes..." : "Save All Settings"}
          </button>
        </div>
      </section>
    </div>
  );
};

/* -----------------------------
   3. Main Component: AdminPage
------------------------------ */
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // GLOBAL ADMIN STATES
  const [avatar, setAvatar] = useState<string | null>(null);
  const [adminName, setAdminName] = useState("Hyelzira");
  const [adminEmail, setAdminEmail] = useState("admin@globalflame.com");

  // Load from Storage
  useEffect(() => {
    const savedAvatar = localStorage.getItem("admin_avatar");
    const savedName = localStorage.getItem("admin_name");
    const savedEmail = localStorage.getItem("admin_email");
    if (savedAvatar) setAvatar(savedAvatar);
    if (savedName) setAdminName(savedName);
    if (savedEmail) setAdminEmail(savedEmail);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard label="Live Traffic" value="582" trend="+52%" up={true} />
              <StatCard label="Monthly Reach" value="19,284" trend="+48%" up={true} />
              <StatCard label="User Base" value="4,947" trend="+28%" up={true} />
              <StatCard label="System Latency" value="36ms" trend="-13%" up={false} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-[#161925] border border-slate-800 rounded-2xl p-6 shadow-sm">
                 <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={accessData}>
                      <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#161925', border: '1px solid #334155', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-[#161925] border border-slate-800 rounded-2xl p-6">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">System Health</h3>
                <div className="space-y-6">
                  <MonitorBar label="CPU Usage" percent={42} />
                  <MonitorBar label="Memory" percent={68} />
                  <MonitorBar label="Database" percent={15} />
                </div>
              </div>
            </div>
          </div>
        );
      case "Users": return <UserPage />;
      case "Logs": return <LogPage searchQuery={searchQuery} onBack={() => setActiveTab("Dashboard")} />;
      case "Settings": return (
        <SettingsPage 
          avatar={avatar} setAvatar={setAvatar} 
          adminName={adminName} setAdminName={setAdminName}
          adminEmail={adminEmail} setAdminEmail={setAdminEmail}
        />
      );
      default: return <PlaceholderPage title={activeTab} />;
    }
  };

  return (
    <div className="h-screen bg-[#0f111a] text-slate-200 flex overflow-hidden font-sans">
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#161925] border-r border-slate-800 p-6 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} flex flex-col`}>
        <div className="flex items-center gap-3 mb-10 px-4">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center shadow-lg">
            <ShieldCheck size={14} className="text-white" />
          </div>
          <span className="font-bold tracking-tight text-white uppercase text-xs">Core Admin</span>
        </div>
        <nav className="space-y-1 flex-1">
          <SidebarItem icon={<LayoutDashboard size={15} />} label="Overview" active={activeTab === "Dashboard"} onClick={() => {setActiveTab("Dashboard"); setIsSidebarOpen(false);}} />
          <SidebarItem icon={<UsersIcon size={15} />} label="Directory" active={activeTab === "Users"} onClick={() => {setActiveTab("Users"); setIsSidebarOpen(false);}} />
          <SidebarItem icon={<Database size={15} />} label="System Logs" active={activeTab === "Logs"} onClick={() => {setActiveTab("Logs"); setIsSidebarOpen(false);}} />
          <SidebarItem icon={<Settings size={15} />} label="Settings" active={activeTab === "Settings"} onClick={() => {setActiveTab("Settings"); setIsSidebarOpen(false);}} />
        </nav>
        {/* Updated to redirect to your custom login page */}
        <button onClick={() => window.location.href = '/login'} className="mt-auto flex items-center gap-3 text-slate-500 hover:text-white transition-colors pb-2 px-4">
          <FiLogOut /> <span className="text-sm font-medium">Logout</span>
        </button>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-40 bg-[#0f111a]/80 backdrop-blur-md border-b border-slate-800 h-16 flex items-center justify-between px-8">
          <div className="lg:block hidden">
            <h2 className="text-lg font-bold text-white">{activeTab}</h2>
          </div>
          <button className="lg:hidden p-2 bg-slate-800 rounded-lg" onClick={() => setIsSidebarOpen(true)}>
            <FiMenu size={16} />
          </button>
          <div className="flex items-center gap-6">
            <div className="relative lg:block hidden">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input type="text" placeholder="Search system..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-slate-900 border border-slate-800 rounded-full py-1.5 pl-10 pr-4 text-xs focus:ring-1 ring-blue-500 outline-none w-48" />
            </div>
            <Bell size={18} className="text-slate-500 cursor-pointer hover:text-white" />
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              <div className="text-right lg:block hidden">
                <p className="text-xs font-bold text-white">{adminName}</p>
                <p className="text-[10px] text-slate-500">Head Admin</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 overflow-hidden flex items-center justify-center">
                {avatar ? (
                    <img src={avatar} alt="Admin" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-blue-500 text-[10px] font-bold">{adminName.charAt(0)}</span>
                )}
              </div>
            </div>
          </div>
        </header>
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
      {isSidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />}
    </div>
  );
};

/* --- Reusable Components --- */
const SidebarItem = ({ icon, label, active, onClick }: any) => (
  <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" : "text-slate-500 hover:bg-slate-800/50 hover:text-slate-200"}`}>
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

const StatCard = ({ label, value, trend, up }: any) => (
  <div className="bg-[#161925] border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all">
    <p className="text-[10px] uppercase text-slate-500 font-bold mb-2 tracking-widest">{label}</p>
    <div className="flex justify-between items-end">
      <h4 className="text-2xl font-bold text-white">{value}</h4>
      <span className={`text-[10px] font-bold flex items-center gap-1 ${up ? "text-emerald-400" : "text-rose-400"}`}>
        {up ? <FiArrowUpRight /> : <FiArrowDownRight />} {trend}
      </span>
    </div>
  </div>
);

const MonitorBar = ({ label, percent }: any) => (
  <div>
    <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 mb-2">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const PlaceholderPage = ({ title }: any) => (
  <div className="h-64 bg-[#161925] rounded-2xl flex flex-col items-center justify-center text-center border border-dashed border-slate-800">
    <Settings size={40} className="text-slate-700 mb-4 animate-spin" />
    <h3 className="font-bold text-xl text-white">{title}</h3>
  </div>
);

export default AdminPage;
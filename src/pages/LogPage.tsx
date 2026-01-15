import { useState } from "react";
import { User as UserIcon, ShieldCheck, Info, ArrowLeft, Activity } from "lucide-react";

/* -----------------------------
   Types
------------------------------ */
interface User {
  id: number;
  name: string;
  kyc: "Verified" | "Pending";
  nin: string;
  phone: string;
  country: string;
  role: "Admin" | "Member";
  status: "Active Now" | string;
  bio: string;
  loginCount: number; // Added field for the scale
}

/* -----------------------------
   Mock Data
------------------------------ */
const users: User[] = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  kyc: i % 3 === 0 ? "Verified" : "Pending",
  nin: `23489012${i}x`,
  phone: `+234 803 000 ${10 + i}`,
  country: "Nigeria",
  role: i === 0 ? "Admin" : "Member",
  status: i % 4 === 0 ? "Active Now" : "1 hour ago",
  bio: "Strategic team player specialized in operational logistics and group coordination.",
  // Generates random login counts for the visual scale
  loginCount: Math.floor(Math.random() * 100) + 1, 
}));

/* -----------------------------
   Sub-Component Export
------------------------------ */
interface LogPageProps {
  onBack: () => void;
}

export default function LogPage({ onBack }: LogPageProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="animate-in fade-in duration-500 font-sans text-white">
      
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            User Directory
          </h1>
          <p className="text-gray-400 text-sm">
            Monitoring 16 active group participants
          </p>
        </div>

        <button
          onClick={onBack}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-xl border border-white/10 transition-all shadow-sm"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="group cursor-pointer bg-[#1c1642] border border-white/5 p-5 rounded-2xl hover:border-fuchsia-500/50 transition-all hover:shadow-xl hover:shadow-fuchsia-500/5"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[#251d53] rounded-xl group-hover:bg-fuchsia-600 transition-colors">
                <UserIcon size={20} className="text-gray-300 group-hover:text-white" />
              </div>
              <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-lg ${
                user.role === "Admin" ? "bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30" : "bg-white/5 text-gray-400"
              }`}>
                {user.role}
              </span>
            </div>

            <h3 className="font-bold text-gray-100">{user.name}</h3>
            <p className="text-xs text-gray-400 mb-2">{user.phone}</p>

            {/* --- Login Activity Scale (Mini) --- */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-gray-500 uppercase font-bold">Login Frequency</span>
                <span className="text-[9px] text-fuchsia-400 font-bold">{user.loginCount}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-fuchsia-600 to-purple-500 transition-all duration-1000" 
                  style={{ width: `${user.loginCount}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 w-fit px-2 py-1 rounded-lg border border-emerald-400/20">
              <ShieldCheck size={12} />
              KYC {user.kyc}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-[#09061a]/80 backdrop-blur-md flex items-center justify-center z-100 p-2">
          <div className="bg-[#1c1642] border border-white/10 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in duration-200">
            <div className="bg-linear-to-r from-fuchsia-600 to-purple-600 p-8 text-white relative">
              <button
                onClick={() => setSelectedUser(null)}
                className="absolute top-5 right-5 hover:scale-110 transition-transform"
              >
                ✕
              </button>

              <div className="flex items-center gap-5">
                <div className="h-15 w-15 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/30">
                  <UserIcon size={35} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedUser.name}</h2>
                  <div className="flex items-center gap-2 text-fuchsia-100 text-sm mt-1">
                    <span className={`h-2.5 w-2.5 rounded-full ${
                      selectedUser.status === "Active Now" ? "bg-green-400 animate-pulse" : "bg-gray-400"
                    }`} />
                    {selectedUser.status}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* --- Large Login Scale --- */}
              <div className="bg-[#251d53] p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 mb-3 text-fuchsia-400">
                  <Activity size={16} />
                  <span className="text-[10px] uppercase font-black tracking-widest">Access Metrics</span>
                </div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-2xl font-bold text-white">{selectedUser.loginCount} <span className="text-xs text-gray-500 font-normal">Total Logins</span></p>
                  <p className="text-xs text-gray-400">{selectedUser.loginCount}% Active</p>
                </div>
                <div className="w-full h-2.5 bg-[#120d31] rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-linear-to-r from-fuchsia-500 via-purple-500 to-indigo-500 transition-all duration-700" 
                    style={{ width: `${selectedUser.loginCount}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">NIN Number</span>
                  <p className="text-gray-200 font-semibold">{selectedUser.nin}</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Country</span>
                  <p className="text-gray-200 font-semibold">{selectedUser.country}</p>
                </div>
              </div>

              <div className="bg-[#251d53] p-4 rounded-2xl border border-white/5">
                <span className="text-[10px] text-fuchsia-400 uppercase font-black tracking-widest flex items-center gap-2 mb-2">
                  <Info size={14} /> Profile Biography
                </span>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "{selectedUser.bio}"
                </p>
              </div>

              <button
                onClick={() => setSelectedUser(null)}
                className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all"
              >
                Close Directory
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
// Ensure the path to your image asset is correct
import loginImage from "../assets/images/HOO.jpg";

interface LoginFormData {
  identifier: string; // Email or Username
  password: string;
  rememberMe: boolean;
}

const LoginPage: React.FC = () => {
  // Initialize the navigate function
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    identifier: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.identifier.trim()) {
      setError("Email or username is required.");
      return false;
    }

    if (!formData.password.trim()) {
      setError("Password is required.");
      return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      console.log("Login data:", formData);
      
      // Simulate API call (e.g., waiting for server response)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setLoading(false);

      // REDIRECTION LOGIC START
      // After successful "login", redirect to the homepage
      // Ensure you have a route for "/" or "/home" defined in your App.tsx
      navigate("/home"); 
      // REDIRECTION LOGIC END

    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row bg-white">
      
      {/* Left Side: Image Asset */}
      <div className="relative hidden w-1/2 md:block">
        <img
          src={loginImage}
          alt="Login background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Right Side: Form Content */}
      <div className="flex w-full items-center justify-center px-8 md:w-1/2 lg:px-24 py-12">
        <div className="w-full max-w-md space-y-8">
          
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
              Login In
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Please enter your mobile number or email address and we will send you a code to log in or create an account.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                name="identifier"
                id="identifier"
                value={formData.identifier}
                onChange={handleChange}
                placeholder="Email or Username"
                className="block w-full rounded border border-gray-300 px-4 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
              
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="block w-full rounded border border-gray-300 px-4 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />

              <div className="flex items-center justify-between py-2">
                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" size-xs className="text-xs font-bold tracking-widest text-blue-600 uppercase hover:underline">
                  Use Password Instead
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center justify-center rounded bg-[#5BC0DE] px-10 py-3 text-sm font-bold text-white shadow-sm transition-all uppercase hover:bg-sky-500 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                loading ? "opacity-70 cursor-not-allowed" : "opacity-100"
              }`}
            >
              {loading ? "Processing..." : "Next"}
            </button>
          </form>

          <div className="bg-gray-50 p-4 rounded mt-8">
            <p className="text-xs text-gray-600">
              By continuing, you agree to our{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms of Use
              </Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
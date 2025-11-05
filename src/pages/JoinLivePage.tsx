// JoinLive.tsx
import { Home } from 'lucide-react';

const LivePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="text-center bg-white p-10 md:p-16 rounded-3xl shadow-2xl max-w-lg w-full 
                        border-t-8 border-fuchsia-600 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="text-7xl font-extrabold text-fuchsia-600 mb-4 tracking-wider">
                    <span className="opacity-100">O</span>
                    <span className="opacity-100">o</span>
                    <span className="opacity-100">p</span>
                    <span className="opacity-100">s</span>
                    <span className="opacity-100">!</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Feature Coming Soon!
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-sm mx-auto">
                    We're currently preparing the live streaming experience. This feature will be **available later**.
                </p>
                {/* Button that navigates back to the root route (/) */}
                <a 
                    href="/" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-full font-bold text-lg 
                               hover:bg-purple-700 transition-colors shadow-lg transform hover:-translate-y-0.5"
                    aria-label="Go back to the homepage"
                >
                    <Home className="w-5 h-5 mr-2" />
                   Back to Home
                </a>
            </div>
        </div>
    );
};

export default LivePage;
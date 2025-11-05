import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeHeader from './components/HomeHeader';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; 
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ReviewPage from "./pages/ReviewPage";
import BlogPage from "./pages/BlogPage"; 
import ActivitiesPage from "./pages/ActivitiesPage";
import TeamPage from "./pages/TeamPage";
import JoinLivePage from "./pages/JoinLivePage";

// Simple 404 component
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-purple-700 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <a
        href="/"
        className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans">
        <HomeHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/join-live" element={<JoinLivePage />} />
          {/* 
          
          
          <Route path="/team" element={<TeamPage />} />
          
           */}
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

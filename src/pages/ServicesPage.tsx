// src/ServicesPage.tsx
import type { FC } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import {
    Heart, 
    Lightbulb, 
    Users, 
    Handshake, 
    BookOpen, 
    Megaphone, 
    Sparkles, 
    Leaf, 
    ArrowRight, 
    // Icons for Header/Footer
    Facebook, Twitter, Instagram, Mail, Phone,
    Home,
} from 'lucide-react';

// ----------------------------------------------------------------------
// 1. PROFESSIONAL & CREATIVE HEADER COMPONENT (Replacement)
// ----------------------------------------------------------------------

const ProfessionalHeader: FC = () => (
    <header className="bg-white shadow-xl sticky top-0 z-20 transition-all duration-300 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo/Brand - Creative Font Styling */}
            <Link to="/" className="text-3xl font-black text-gray-900 tracking-tight flex items-center">
                GFM <span className="text-fuchsia-600 ml-1 font-bold">Youth</span>
                <Sparkles className="w-5 h-5 ml-2 text-yellow-500 hidden sm:block" />
            </Link>

            {/* Navigation Links (Desktop) - Enhanced Styling */}
            <nav className="hidden md:flex space-x-7 text-lg font-semibold">
                <Link to="/" className="text-gray-600 hover:text-fuchsia-600 transition-colors flex items-center relative group">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-fuchsia-600 transition-colors flex items-center relative group">
                    About
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                {/* Highlight current page with a distinct pill shape */}
                <Link to="/services" className="px-3 py-1 text-fuchsia-700 bg-fuchsia-100 rounded-full font-bold shadow-inner transition-colors border border-fuchsia-300">
                    Services
                </Link>
                <Link to="/team" className="text-gray-600 hover:text-fuchsia-600 transition-colors flex items-center relative group">
                    Team
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
            </nav>

            {/* CTA Button - Creative Gradient/Shadow */}
            <Link 
                to="/contact"
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg font-bold text-base 
                           hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
                Connect Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* Mobile Menu Icon (Placeholder) */}
            <button className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-fuchsia-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </header>
);

// ----------------------------------------------------------------------
// 2. PROFESSIONAL & CREATIVE FOOTER COMPONENT (Replacement)
// ----------------------------------------------------------------------

const ProfessionalFooter: FC = () => (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
        {/* Creative Abstract Background Shape */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-fuchsia-900 opacity-10 transform skew-y-3 -translate-x-1/4 hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:gap-x-16">
                
                {/* 1. Logo/Mission Statement (Enhanced) */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">GFM <span className="text-fuchsia-700">Youth</span></h3>
                    <p className="text-sm leading-relaxed mb-5 border-l-4 border-fuchsia-500 pl-3">
                        Raising a generation of *purpose-driven leaders* manifesting the fullness of Christ's Reality.
                    </p>
                    {/* Social Links - Creative Ring Hover */}
                    <div className="flex space-x-3">
                        <a href="https://facebook.com/gfmyouth" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 border border-gray-700 rounded-full text-gray-400 hover:text-fuchsia-500 hover:border-fuchsia-500 transition-all duration-200">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com/gfmyouth" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 border border-gray-700 rounded-full text-gray-400 hover:text-fuchsia-500 hover:border-fuchsia-500 transition-all duration-200">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://instagram.com/gfmyouth" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border border-gray-700 rounded-full text-gray-400 hover:text-fuchsia-500 hover:border-fuchsia-500 transition-all duration-200">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-5 border-b-2 border-fuchsia-600/50 pb-2">Quick Links</h4>
                    <ul className="space-y-3 text-base">
                        <li><Link to="/team" className="hover:text-fuchsia-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Team</Link></li>
                        <li><Link to="/activities" className="hover:text-fuchsia-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Activities</Link></li>
                        <li><Link to="/blog" className="hover:text-fuchsia-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-fuchsia-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Contact Us</Link></li>
                    </ul>
                </div>

                {/* 3. Resources/Legal */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-5 border-b-2 border-fuchsia-600/50 pb-2">Legal & Info</h4>
                    <ul className="space-y-3 text-base">
                        <li><Link to="/about" className="hover:text-fuchsia-400 transition-colors">Our Story</Link></li>
                        <li><Link to="/privacy" className="hover:text-fuchsia-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-fuchsia-400 transition-colors">Terms of Use</Link></li>
                        <li><Link to="/faq" className="hover:text-fuchsia-400 transition-colors">FAQs</Link></li>
                    </ul>
                </div>

                {/* 4. Contact Information (Vertical Alignment) */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-5 border-b-2 border-fuchsia-600/50 pb-2">Get in Touch</h4>
                    <address className="not-italic space-y-4 text-base">
                        <div className="flex items-start">
                            <Mail className="w-5 h-5 mr-3 mt-1 text-fuchsia-500 shrink-0" />
                            <a href="mailto:info@gfmyouth.org" className="hover:text-fuchsia-400 transition-colors border-b border-transparent hover:border-fuchsia-400">info@gfmyouth.org</a>
                        </div>
                        <div className="flex items-start">
                            <Phone className="w-5 h-5 mr-3 mt-1 text-fuchsia-500 shrink-0" />
                            <a href="tel:+1234567890" className="hover:text-fuchsia-400 transition-colors border-b border-transparent hover:border-fuchsia-400">+1 (234) 567-890</a>
                        </div>
                        <div className="flex items-start">
                            {/* Icon for Location/Map-Pin could be used here, but using a placeholder for simplicity */}
                            <Home className="w-5 h-5 mr-3 mt-1 text-fuchsia-500 shrink-0" />
                            <p className="text-gray-400">Zarmaganda Diye, Off Rayfield Road, Jos Plateau State</p>
                        </div>
                    </address>
                </div>
            </div>
            
            {/* Copyright Line - More prominent and centered */}
            <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                <p className="text-sm text-gray-500 font-medium">
                    &copy; {new Date().getFullYear()} **GFM Youth Community**. All rights reserved. 
                    <span className="ml-3 text-xs inline-flex items-center text-gray-600">
                        Crafted with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> for the Future.
                    </span>
                </p>
            </div>
        </div>
    </footer>
);


// ----------------------------------------------------------------------
// 3. STATIC DATA FOR SERVICES (Creative titles/descriptions enhanced)
// ----------------------------------------------------------------------

const CORE_SERVICES = [
    {
        icon: Users,
        title: "ACCOUNTABILITY",
        description: "Forge deep, lasting friendships and relationships with people you can count on through weekly services and targeted small group mentorship.",
    },
    {
        icon: Lightbulb,
        title: "TRANSPARENCY",
        description: "Unlock profound biblical truths and gain practical wisdom through the gathering of the brethen and the transperancy and honesty of church.",
    },
    {
        icon: BookOpen,
        title: "TIMELY DISCLOSURE",
        description: "Equip yourself with practical skills for the modern world, therefore going out and winning souls through the accuracy of the word and media.",
    },
    {
        icon: Handshake,
        title: "HONESTY",
        description: "Connect one-on-one with seasoned leaders and mentors who provide honest and accurate support, advices in your walk with Christ.",
    },
    {
        icon: Megaphone,
        title: "COMMUNICATION",
        description: "Be the light in your community. Participate in mission trips, local evangelism, and social impact projects to share hope and positive change.",
    },
    {
        icon: Leaf,
        title: "ACTING IN INTEGRITY",
        description: "A focused program on defining your divine calling, mastering leadership traits, and building the character required for long-term fulfillment.",
    },
];

const HOW_WE_SERVE_STEPS = [
    {
        step: "1. Discover",
        title: "Find Your Community",
        description: "Discover a GFM Youth group available, join our online community. This is where your journey starts.",
        icon: Users,
    },
    {
        step: "2. Develop",
        title: "Grow Your Capacity",
        description: "Engage fully with a core service—attend a seminar, join a mentorship circle, or enroll in a skills workshop.",
        icon: Lightbulb,
    },
    {
        step: "3. Express",
        title: "Live Out Your Calling",
        description: "Use your newly developed gifts to serve others, either in our outreach programs or within the church ministry.",
        icon: Heart,
    },
    {
        step: "4. Multiply",
        title: "Lead the Next Generation",
        description: "Step into leadership, become a mentor, and help us raise the next wave of purpose-driven youth.",
        icon: Sparkles,
    },
];

// ----------------------------------------------------------------------
// 4. MAIN SERVICES PAGE COMPONENT (Updated with Header and Footer)
// ----------------------------------------------------------------------

const ServicesPage: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            
            {/* 1. PROFESSIONAL HEADER */}
            <ProfessionalHeader />

            {/* 2. Hero Section - Creative Gradient Background */}
            <section className="bg-linear-to-br from-fuchsia-800 to-purple-900 text-white py-24 px-6 text-center shadow-inner">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight uppercase">
                        <span className="block text-fuchsia-300 text-lg uppercase tracking-widest mb-2 font-extrabold">Service Pillars</span>
                        Building Lives of *Power & Purpose*
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-95 max-w-2xl mx-auto border-t border-fuchsia-400 pt-4">
                        We don't just offer activities — we provide *transformational pathways*. Explore our comprehensive communities designed to nurture the person: Spirit, Mind, and Body.
                    </p>
                    <Link 
                        to="/contact" 
                        className="mt-9 inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-purple-900 rounded-full font-extrabold text-lg 
                                 hover:bg-yellow-300 transition-colors shadow-2xl group"
                    >
                        Ready to Start? Let's Connect
                        <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>

            {/* 3. Our Core Services (Grid Section) - Creative Cards */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 mb-4 border-b-4 border-fuchsia-100 inline-block pb-2">THE PILLARS OF TRANSPARENCY</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Each pillar is built to support a specific dimension of a young person's life, ensuring holistic development and impact.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {CORE_SERVICES.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="p-8 bg-white rounded-2xl shadow-xl border-t-8 border-purple-500 
                                             hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* Abstract background flair */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-fuchsia-200 rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-300 transform -translate-y-1/2 translate-x-1/2`}></div>

                                    <div className="flex items-center mb-4 relative z-10">
                                        <div className="p-3 bg-fuchsia-100 rounded-full mr-4 border-2 border-fuchsia-400">
                                            <IconComponent className="w-8 h-8 text-fuchsia-700" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pl-14">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. How We Serve (Process/Steps Section) - Creative Flow */}
            <section className="py-20 px-6 bg-fuchsia-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-15">
                        <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">The Global flame Pathway</p>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">Four-Step Journey to Impact</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We guide you through a deliberate and proven process to ensure sustainable spiritual and personal development.
                        </p>
                    </div>
                    
                    <div className="relative">
                        {/* Vertical Connector Line (Creative Element) */}
                        <div className="hidden lg:block absolute left-1/2 w-0.5 bg-fuchsia-300 h-full transform -translate-x-1/2 z-0"></div>
                        
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {HOW_WE_SERVE_STEPS.map((item, index) => {
                                const IconComponent = item.icon;
                                const isOdd = index % 2 !== 0;
                                
                                return (
                                    <div key={index} className={`flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-2xl border-b-4 border-purple-600 ${isOdd ? 'lg:mt-16' : ''}`}>
                                        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                                            <IconComponent className="w-10 h-10 text-white" />
                                        </div>
                                        <p className="text-sm font-semibold text-fuchsia-600 uppercase tracking-widest">{item.step}</p>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-1">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Call to Action - Focused and Bold */}
            <section className="bg-purple-900 text-white py-10 px-3 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-black mb-3">Don't Wait For Change. **Be The Change.**</h2>
                    <p className="text-meduim opacity-80 mb-4 font-light">
                        Take the decisive step toward realizing your full, God-given potential. Our community is waiting to empower and enrich you.
                    </p>
                    <Link 
                        to="/contact" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-fuchsia-600 text-white rounded-full font-bold text-xl 
                                 hover:bg-purple-600 transition-colors shadow-2xl"
                    >
                        Join Us Live Today!
                        <ArrowRight className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </section>

            {/* 6. PROFESSIONAL FOOTER */}
            <ProfessionalFooter />
            
        </div>
    );
};

export default ServicesPage;
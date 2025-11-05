// src/ActivitiesPage.tsx
import { useState } from 'react'; 
import type { FC } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { // Added imports for the new Header/Footer
    Calendar,     
    MapPin,       
    Clock,        
    Sparkles,     
    ArrowRight,   
    Users,        
    X,            
    Heart, Home, Mail, Phone, Facebook, Twitter, Instagram 
} from 'lucide-react';

// --- TYPE DEFINITION ---
type UpcomingEvent = typeof UPCOMING_EVENTS[0];

// ----------------------------------------------------------------------
// 1. PROFESSIONAL & CREATIVE HEADER COMPONENT 
// ----------------------------------------------------------------------

const ProfessionalHeader: FC = () => (
    <header className="bg-white shadow-xl sticky top-0 z-20 transition-all duration-300 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo/Brand - Creative Font Styling */}
            <Link to="/" className="text-1xl font-black text-gray-700 tracking-tight flex items-center">
                GLOBAL FLAME <span className="text-fuchsia-600 ml-1 font-bold">YOUTH</span>
                <Sparkles className="w-3 h-3 ml-2 text-yellow-500 hidden sm:block" />
            </Link>

            {/* Navigation Links (Desktop) - Highlight Activities/Events */}
            <nav className="hidden md:flex space-x-7 text-lg font-semibold">
                <Link to="/" className="text-gray-600 hover:text-fuchsia-600 transition-colors flex items-center relative group">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link to="/services" className="text-gray-600 hover:text-fuchsia-600 transition-colors flex items-center relative group">
                    Services
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                {/* Highlight current page with a distinct pill shape */}
                <Link to="/activities" className="px-3 py-1 text-purple-700 bg-purple-100 rounded-full font-bold shadow-inner transition-colors border border-purple-300">
                    Activities
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-fuchsia-600 transition-colors flex items-center relative group">
                    About
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
            </nav>

            {/* CTA Button - Creative Gradient/Shadow */}
            <Link 
                to="/contact"
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-linear-to-r from-fuchsia-600 to-purple-600 text-white rounded-lg font-bold text-base 
                           hover:from-fuchsia-700 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
                Connect <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* Mobile Menu Icon (Placeholder) */}
            <button className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-fuchsia-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </header>
);


// ----------------------------------------------------------------------
// 2. PROFESSIONAL & CREATIVE FOOTER COMPONENT (Added)
// ----------------------------------------------------------------------

const ProfessionalFooter: FC = () => (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
        {/* Creative Abstract Background Shape */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-purple-900 opacity-10 transform skew-y-3 -translate-x-1/4 hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:gap-x-16">
                
                {/* 1. Logo/Mission StatementSS */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tighter">GFM <span className="text-fuchsia-700">Youth</span></h3>
                    <p className="text-sm leading-relaxed mb-6 border-l-4 border-fuchsia-500 pl-3">
                        Raising a generation of **purpose-driven leaders** manifesting the fullness of Christ's Reality.
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
                    <h4 className="text-xl font-bold text-white mb-5 border-b-2 border-purple-600/50 pb-2">Quick Links</h4>
                    <ul className="space-y-3 text-base">
                        <li><Link to="/activities" className="hover:text-purple-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Activities</Link></li>
                        <li><Link to="/sermons" className="hover:text-purple-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Sermons</Link></li>
                        <li><Link to="/volunteer" className="hover:text-purple-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Volunteer</Link></li>
                        <li><Link to="/contact" className="hover:text-purple-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-fuchsia-500" /> Contact Us</Link></li>
                    </ul>
                </div>

                {/* 3. Resources/Legal */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-5 border-b-2 border-purple-600/50 pb-2">Legal & Info</h4>
                    <ul className="space-y-3 text-base">
                        <li><Link to="/about" className="hover:text-purple-400 transition-colors">Our Story</Link></li>
                        <li><Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-purple-400 transition-colors">Terms of Use</Link></li>
                        <li><Link to="/faq" className="hover:text-purple-400 transition-colors">FAQs</Link></li>
                    </ul>
                </div>

                {/* 4. Contact Information (Vertical Alignment) */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-5 border-b-2 border-purple-600/50 pb-2">Get in Touch</h4>
                    <address className="not-italic space-y-4 text-base">
                        <div className="flex items-start">
                            <Mail className="w-5 h-5 mr-3 mt-1 text-fuchsia-500 shrink-0" />
                            <a href="mailto:globalflameyouthcommunity@gmail.com" className="hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400">houseofoperaworld@gmail.com</a>
                        </div>
                        <div className="flex items-start">
                            <Phone className="w-5 h-5 mr-3 mt-1 text-fuchsia-500 shrink-0" />
                            <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400">(+234)802 642 9018</a>
                        </div>
                        <div className="flex items-start">
                            <Home className="w-5 h-5 mr-3 mt-1 text-fuchsia-500 shrink-0" />
                            <p className="text-gray-400">Zarmaganda Diya, Off Rayfield Road, Jos Plateau State</p>
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

// 3. STATIC DATA FOR ACTIVITIES/EVENTS 

const UPCOMING_EVENTS = [
    {
        id: 1,
        title: "ANNUAL YOUTH CONFERENCE: KAINOS ['Make All Things New']",
        date: "Oct 25-26, 2025",
        time: "Sat 3:00 PM - Sun 3:00 PM",
        location: "Main Auditorium, Zarmaganda Jos",
        description: "A weekend of intensive spiritual growth, team building, and prophetic impartation. Don't miss this life-changing experience! The retreat includes detailed sessions on self-discovery, workshops on leadership, powerful worship experiences, and dedicated prayer times. Registration is mandatory and closes on November 1st.", // <-- Longer description for modal
        imageUrl: "src/assets/images/flyer.jpg", 
        isNew: true,
        details: { 
            cost: "Your Presence",
            contact: "0801 234 5678",
            registrationLink: "#register-retreat",
        }
    },
    {
        id: 2,
        title: "LEADERSHIP SUMMIT: Shaping Future Leaders",
        date: "Nov 1st - 3rd, 2025",
        time: "9:00 AM - 4:00 PM",
        location: "GLOBAL FLAME MAIN AUDITORIUM, Jos",
        description: "Empowering young leaders with practical skills, mentorship, and vision casting for impactful service in their spheres. Keynote speakers include Pastor Femi Adebayo and a panel of seasoned professionals.",
        imageUrl: "src/assets/images/slider2.jpg", 
        isNew: false,
        details: {
            cost: "Free (Registration Required)",
            contact: "0909 876 5432",
            registrationLink: "#register-summit",
        }
    },
    {
        id: 3,
        title: "COMMUNITY OUTREACH",
        date: "Dec 7, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "GLOBAL FLAME AUDITORIUM, Plateau State",
        description: "",
        imageUrl: "src/assets/images/seated.jpg", 
        isNew: false,
        details: {
            cost: "Free (Donations Welcome)",
            contact: "0812 345 6789",
            registrationLink: "#volunteer-outreach",
        }
    },
    {
        id: 4,
        title: "IN HIS PRESENCE: 'Atmosphere of Grace'",
        date: "Nov 9, 2025",
        time: "3:00 PM Daily",
        location: "GLOBAL FLAME AUDITORIUM",
        description: "An evening dedicated to unhindered praise and worship, inviting the presence of God for revival. Come expectant for a mighty move of God's Spirit.",
        imageUrl: "src/assets/images/deliver.jpg", 
        isNew: true,
        details: {
            cost: "Free",
            contact: "0701 112 2334",
            registrationLink: "#register-worship",
        }
    },
];

const PAST_EVENTS = [
    {
        id: 101,
        title: "LIGHT CONFERENCE",
        date: "May 1st - 4th, 2025",
        imageUrl: "src/assets/images/fly.jpg", 
    },
    {
        id: 102,
        title: "BIRTHING OF NEW SEASONS (ABUJA CHAPTER)",
        date: "Sept 26th - 28th, 2025",
        imageUrl: "src/assets/images/fast.jpg", 
    },
    {
        id: 103,
        title: "EXCEEDING GRACE",
        date: "Dec 25th - 30th, 2024",
        imageUrl: "src/assets/images/grace.jpg", 
    },
];

// --- MODAL COMPONENT (Unchanged) ---

interface EventModalProps {
    event: UpcomingEvent;
    onClose: () => void;
}

const EventModal: FC<EventModalProps> = ({ event, onClose }) => {
    return (
        // Modal Overlay
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700/50 p-4"
            onClick={onClose} // Close when clicking outside
        >
            {/* Modal Content */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Header and Close Button */}
                <div className="sticky top-0 bg-fuchsia-700 text-white p-5 flex justify-between items-center z-10 rounded-t-xl">
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    <button 
                        onClick={onClose} 
                        className="p-1 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Image */}
                <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />

                {/* Body Content */}
                <div className="p-6 space-y-6">
                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
                    
                    {/* Key Details Grid */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-200 py-4">
                        <div className="flex items-start">
                            <Calendar className="w-5 h-5 mr-3 mt-1 text-fuchsia-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Date</h4>
                                <p className="text-gray-600">{event.date}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Clock className="w-5 h-5 mr-3 mt-1 text-purple-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Time</h4>
                                <p className="text-gray-600">{event.time}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="w-5 h-5 mr-3 mt-1 text-indigo-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Location</h4>
                                <p className="text-gray-600">{event.location}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Users className="w-5 h-5 mr-3 mt-1 text-pink-600 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Cost</h4>
                                <p className="text-gray-600">{event.details.cost}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact and Action */}
                    <div className="pt-2">
                            <p className="text-sm text-gray-500 mb-4">For immediate inquiries, contact: <span className="font-medium text-gray-700">{event.details.contact}</span></p>

                        <a 
                            href={event.details.registrationLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-fuchsia-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors shadow-lg text-lg"
                        >
                            Register / Sign Up Now <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- EVENT CARD COMPONENT (Unchanged functional logic) ---

interface EventCardProps {
    event: UpcomingEvent;
    onViewDetails: (event: UpcomingEvent) => void; 
}

const EventCard: FC<EventCardProps> = ({ event, onViewDetails }) => ( 
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
        {event.isNew && (
            <span className="absolute top-3 left-3 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                <Sparkles className="w-3 h-3 mr-1" /> New
            </span>
        )}
        <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-4 grow">{event.description.substring(0, 100)}...</p> {/* Shortened description for card view */}
            <div className="space-y-2 text-gray-700 text-sm mb-4 border-t border-fuchsia-100 pt-4">
                <p className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-fuchsia-500" /> {event.date}</p>
                <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-purple-500" /> {event.time}</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-indigo-500" /> {event.location}</p>
            </div>
            {/* Added click handler */}
            <button 
                onClick={() => onViewDetails(event)} 
                className="inline-flex items-center justify-center mt-auto px-6 py-2 bg-fuchsia-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors"
            >
                View Details <ArrowRight className="w-4 h-4 ml-2" />
            </button>
        </div>
    </div>
);

// --- GALLERY CARD COMPONENT (Unchanged functional logic) ---
interface PastEventCardProps {
    event: typeof PAST_EVENTS[0];
}

const PastEventCard: FC<PastEventCardProps> = ({ event }) => (
    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-sm opacity-80">{event.date}</p>
            </div>
        </div>
    </div>
);


// ----------------------------------------------------------------------
// 4. MAIN ACTIVITIES PAGE COMPONENT (Updated with Header and Footer)
// ----------------------------------------------------------------------

const ActivitiesPage: FC = () => {
    // 2. STATE FOR MODAL
    const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);

    const handleViewDetails = (event: UpcomingEvent) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* PROFESSIONAL HEADER (ADDED) */}
            <ProfessionalHeader />

            {/* 1. Hero Section - Updated colors for visual continuity */}
            <section className="bg-linear-to-r from-purple-800 to-fuchsia-900 text-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        <span className="block text-fuchsia-300 text-lg uppercase tracking-widest mb-2">Engage & Grow</span>
                        Discover Our Inspiring Activities & Events
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
                        From powerful retreats to impactful community service, there's always something happening to help you connect, learn, and lead.
                    </p>
                </div>
            </section>

            {/* 2. Upcoming Events Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Calendar className="w-12 h-12 text-fuchsia-600 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Upcoming Events</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Mark your calendars! These are the exciting opportunities we have planned for you to participate in.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {UPCOMING_EVENTS.map((event) => (
                            <EventCard key={event.id} event={event} onViewDetails={handleViewDetails} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Past Events / Gallery Section */}
            <section className="py-20 px-6 bg-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Memories from Past Events</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A glimpse into the joy, learning, and fellowship from our previous gatherings.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PAST_EVENTS.map((event) => (
                            <PastEventCard key={event.id} event={event} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a 
                            href="/gallery" 
                            className="inline-flex items-center px-8 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-fuchsia-600 transition-colors shadow-md"
                        >
                            View All Past Events & Gallery <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </section>
            
            {/* 4. Call to Action (Participate / Contact) */}
            <section className="bg-fuchsia-800 text-white py-16 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <Sparkles className="w-8 h-8 mx-auto mb-3 text-white" />
                    <h2 className="text-3xl md:text-3xl font-bold mb-3">Be Part of the Next Big Thing!</h2>
                    <p className="text-lg opacity-80 mb-6">
                        Your presence makes a difference. Join us in our upcoming activities and experience growth and fellowship.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center px-8 py-3 bg-white text-fuchsia-700 rounded-full font-bold text-xl 
                                 hover:bg-fuchsia-100 transition-colors shadow-lg transform hover:scale-105"
                    >
                        Join Us To Partake
                    </a>
                </div>
            </section>

            {/* PROFESSIONAL FOOTER (REPLACED PLACEHOLDER) */}
            <ProfessionalFooter />

            {/* 5. Render Modal Conditionally */}
            {selectedEvent && (
                <EventModal 
                    event={selectedEvent} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
};

export default ActivitiesPage;
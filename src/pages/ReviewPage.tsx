import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import {
    Quote, 
    Star, 
    Users, 
    MessageSquare, 
    CheckCircle, 
    X, 
    ThumbsUp,
    Zap, 
    MapPin,
    Mail,
    Phone,
} from 'lucide-react';

// --- PLACEHOLDER COMPONENTS (Unchanged) ---

// Helper component for displaying star ratings (STATIC)
const Rating: FC<{ count: number }> = ({ count }) => (
    <div className="flex space-x-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 transition-colors ${
                    i < count ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                }`}
            />
        ))}
    </div>
);

// Interactive Star Rating Input Component for the Modal (Unchanged functionality)
interface StarRatingInputProps {
    value: number;
    onChange: (rating: number) => void;
}

const StarRatingInput: FC<StarRatingInputProps> = ({ value, onChange }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="flex space-x-1 cursor-pointer">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <Star
                        key={index}
                        className={`w-7 h-7 transition-colors`}
                        // Color based on hover state or actual selected value
                        style={{
                            color: ratingValue <= (hover || value) ? '#f59e0b' : '#d1d5db', // yellow-500 or gray-300
                            fill: ratingValue <= (hover || value) ? '#f59e0b' : 'none',
                        }}
                        onClick={() => onChange(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                    />
                );
            })}
        </div>
    );
};


// --- MODAL COMPONENT (CREATIVELY UPDATED) ---
interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ReviewSubmissionModal: FC<ReviewModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [rating, setRating] = useState(5); 
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setRating(5); 
            setName('');
            setReview('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Simulating API call delay for effect
        setTimeout(() => {
            console.log("Review submitted successfully!", { name, rating, review });
            setIsSubmitted(true); 

            setTimeout(() => {
                onClose(); 
            }, 1800); // Shorter close time for better UX
        }, 300); // Short simulated submission time
    };

    return (
        // The overlay ensures the user focuses on the modal
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 p-4 transition-opacity duration-300" onClick={onClose}>
            {/* Modal Content - Larger, more distinctive design */}
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-xl lg:max-w-3xl overflow-hidden relative transform transition-all duration-300 scale-100" 
                onClick={e => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100 disabled:opacity-50"
                    aria-label="Close review form"
                    disabled={isSubmitted} 
                >
                    <X className="w-6 h-6" />
                </button>

                {isSubmitted ? (
                    // Success State - More vibrant and quick
                    <div className="p-12 text-center bg-linear-to-br from-emerald-500 to-teal-600 text-white rounded-b-2xl">
                        <ThumbsUp className="w-20 h-20 text-white mx-auto mb-4 animate-bounce" />
                        <h3 className="text-4xl font-extrabold mb-2">Success!</h3>
                        <p className="text-lg font-light">Your testimony shines brighter than ever. Thank you for your impact!</p>
                    </div>
                ) : (
                    // Initial Form State - Split layout
                    <div className="lg:grid lg:grid-cols-2">
                        {/* Left Side: Dynamic Visual Banner */}
                        <div className="hidden lg:flex flex-col justify-center items-center p-10 bg-linear-to-tr from-fuchsia-700 to-purple-800 text-white">
                            <Quote className="w-16 h-16 text-fuchsia-300 mb-6" />
                            <h4 className="text-3xl font-bold mb-3">Your Story Matters</h4>
                            <p className="text-sm text-fuchsia-200 text-center font-light">
                                Every star and every word fuels our mission to empower youth globally. Be the spark that ignites change.
                            </p>
                            <div className="mt-8">
                                <Rating count={5} />
                                <p className="text-xs mt-2 text-fuchsia-200">Trusted by thousands.</p>
                            </div>
                        </div>

                        {/* Right Side: The Form */}
                        <div className="p-8 md:p-10">
                            <h3 className="text-3xl font-extrabold text-purple-900 mb-1">Share Your Impact</h3>
                            <p className="text-gray-500 mb-6 text-sm">
                                Please provide an honest review of your GFM experience.
                            </p>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                {/* Rating Input Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">1. Rate Your Experience</label>
                                    <div className="p-3 bg-fuchsia-50 rounded-lg border border-fuchsia-100 inline-block">
                                        <StarRatingInput value={rating} onChange={setRating} />
                                    </div>
                                    <input type="hidden" name="rating" value={rating} />
                                </div>
                                
                                {/* Name Input Field */}
                                <div>
                                    <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-700 mb-2">2. Your Name (Optional)</label>
                                    <input 
                                        type="text" 
                                        id="modal-name" 
                                        className="w-full border border-gray-300 p-3 rounded-xl focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all duration-200" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="E.g., A dedicated Alumna"
                                    />
                                </div>
                                
                                {/* Review Textarea Field */}
                                <div>
                                    <label htmlFor="modal-review" className="block text-sm font-semibold text-gray-700 mb-2">3. Your Testimony (30 words or more)</label>
                                    <textarea 
                                        id="modal-review" 
                                        rows={6} 
                                        className="w-full border border-gray-300 p-3 rounded-xl resize-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all duration-200" 
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        placeholder="Write your review here..."
                                        required
                                    ></textarea>
                                </div>
                                
                                {/* Submission Button */}
                                <button 
                                    type="submit" 
                                    className="w-full py-3 bg-purple-700 text-white font-extrabold rounded-xl shadow-lg hover:bg-purple-800 transition-colors uppercase tracking-widest mt-6 
                                               transform hover:scale-[1.01] active:scale-95 duration-200"
                                >
                                    Submit & Ignite the Flame
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- CREATIVE ADDITION: Call-to-Action Card (Updated Style) ---
interface JoinCommunityCardProps {
    onClick: () => void;
}

const JoinCommunityCard: FC<JoinCommunityCardProps> = ({ onClick }) => (
    // Card uses deep purple background for contrast and high-impact
    <div
        className="p-8 bg-fuchsia-700 text-white rounded-xl shadow-xl flex flex-col items-center justify-center 
                   text-center cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        onClick={onClick}
    >
        <Zap className="w-12 h-12 text-yellow-300 mb-4" />
        <h3 className="text-2xl font-extrabold mb-2">Ready for Transformation?</h3>
        <p className="text-lg font-light opacity-90 mb-6">
            Don't just read about the impact, experience the journey yourself. Join the **Global Flame** community today.
        </p>
        <button
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-fuchsia-700 rounded-full font-bold text-base 
                        hover:bg-fuchsia-100 transition-colors shadow-lg uppercase tracking-wider"
        >
            <CheckCircle className="w-5 h-5 mr-2" />
            Connect With Our Team
        </button>
    </div>
);

// --- NEW CREATIVE FOOTER COMPONENT ---
const CreativeFooter: FC = () => {
    // Placeholder links - in a real app, these would navigate.
    const handleLinkClick = (name: string) => {
        console.log(`Simulating navigation to: ${name}`);
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Main Grid for Links and Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-8">
                    
                    {/* Column 1: Logo/Mission Statement */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-2xl font-extrabold text-fuchsia-500 mb-4">GFM Youth</h4>
                        <p className="text-sm font-light leading-relaxed">
                            Empowering the next generation of global citizens through mentorship, faith, and community development.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h5 className="text-base font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h5>
                        <ul className="space-y-3 text-sm">
                            {['Our Vision', 'Programs', 'Volunteer', 'Support'].map((link) => (
                                <li key={link}>
                                    <a 
                                        href="#" 
                                        onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
                                        className="hover:text-fuchsia-400 transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h5 className="text-base font-bold text-white mb-4 uppercase tracking-wider">Connect</h5>
                        <ul className="space-y-3 text-sm">
                            {['Blog', 'Testimonies', 'Leadership Team', 'FAQ'].map((link) => (
                                <li key={link}>
                                    <a 
                                        href="#" 
                                        onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
                                        className="hover:text-fuchsia-400 transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="col-span-2 md:col-span-1">
                        <h5 className="text-base font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h5>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-3 text-fuchsia-500" />
                                <p>Zarmaganda,Off Rayfield Road, Jos Plateau State</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-fuchsia-500" />
                                <p>globalflameyouthcommunity@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-fuchsia-500" />
                                <p>+234 813 684 8041</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright and Socials Row */}
                <div className="text-center md:flex md:justify-between md:items-center text-sm pt-4">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} GFM Youth Community. All rights reserved.
                    </p>
                    {/* Placeholder for social media icons */}
                    <div className="flex justify-center md:justify-end space-x-4">
                        <Zap className="w-6 h-6 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                        <Users className="w-6 h-6 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                        <MessageSquare className="w-6 h-6 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};


// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const TESTIMONIALS = [
    {
        quote: "Before joining GFM, I felt lost. Their mentorship program gave me clear direction for my career and deepened my faith tremendously. Truly a life-changing community.",
        author: "Ngozi A.",
        role: "Active Member, Lagos",
        rating: 5,
    },
    {
        quote: "The weekly study groups are amazing! It's a supportive environment where we can ask tough questions and grow together. Best fellowship I've ever been a part of.",
        author: "Armen E.",
        role: "Active Member, Yobe",
        rating: 5,
    },
    {
        quote: "I highly recommend GFM for any youth seeking purpose and community. The leaders genuinely care, and the programs are highly relevant to modern challenges.",
        author: "ThankGod S.",
        role: "Everything Godly-dating member",
        rating: 4,
    },
    {
        quote: "From feeling isolated to leading a small group—my journey here has been incredible. GFM helped me find my voice and confidence.",
        author: "Femi O.",
        role: "Small Group Leader",
        rating: 5,
    },
    {
        quote: "The practical leadership workshops equipped me with skills I use every day. GFM is an essential resource for ambitious young leaders.",
        author: "Tolu I.",
        role: "Student, U.I.",
        rating: 5,
    },
];

const IMPACT_NUMBERS = [
    {
        icon: Users,
        number: "5,000+",
        label: "Youth Empowered Globally",
        color: "text-fuchsia-700",
    },
    {
        icon: CheckCircle,
        number: "10+",
        label: "Programs & Workshops Launched",
        color: "text-purple-700",
    },
    {
        icon: Zap, // Changed icon for visual impact
        number: "4.9/5",
        label: "Average Satisfaction Rating",
        color: "text-amber-500",
    },
];

// ----------------------------------------------------------------------
// MAIN REVIEWS PAGE COMPONENT (Updated Design)
// ----------------------------------------------------------------------

const ReviewPage: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    
    // Simulate navigation to the Team or Join page
    const handleJoinCommunity = () => {
        console.log("Simulating navigation to the 'Connect' page.");
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* 1. Hero Section (Professional Gradient) */}
            <section className="bg-linear-to-br from-fuchsia-900 to-purple-800 text-white py-24 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                        <span className="block text-fuchsia-300 text-lg uppercase tracking-[0.25em] mb-4 font-semibold">
                           HE IS KING, PRAISE THE LORD
                        </span>
                        THE VOICES OF OUR TESTIFIERS
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-80 max-w-3xl mx-auto mt-4">
                        We give glory to God for touching the lives of many, by the undeniable transformation in the lives of the youths we serve.
                    </p>
                </div>
            </section>

            {/* 2. Key Statistics/Impact Numbers (Top section for credibility) */}
            <section className="py-16 px-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {IMPACT_NUMBERS.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                key={index} 
                                className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
                            >
                                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                                <p className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-1">{item.number}</p>
                                <p className="text-base font-medium text-gray-600 uppercase tracking-wider">{item.label}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. Featured Testimonials (Magazine-Style Grid) */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Life-Changing Testimonies
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            These stories reflect the genuine passion, supportive faith, and tangible growth found within the Global Flame Youth Community.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Testimonial Cards (Modified to look more sophisticated) */}
                        {TESTIMONIALS.slice(0, 3).map((review, index) => (
                            <div 
                                key={index} 
                                // Clean, professional card design: white background, subtle shadow, fuchsia border on top
                                className="p-8 bg-white rounded-xl shadow-md border-t-4 border-fuchsia-600 flex flex-col justify-between 
                                           hover:shadow-xl transition-shadow duration-300 h-full"
                            >
                                <div>
                                    <Quote className="w-6 h-6 text-fuchsia-500 mb-4 transform rotate-180" />
                                    <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                                        "{review.quote}"
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-gray-100">
                                    <Rating count={review.rating} />
                                    <p className="text-lg font-bold text-gray-900 mt-3">{review.author}</p>
                                    <p className="text-sm text-fuchsia-700 font-medium">{review.role}</p>
                                </div>
                            </div>
                        ))}
                        
                        {/* The creative 4th card (High-impact CTA) */}
                        <JoinCommunityCard onClick={handleJoinCommunity} />
                    </div>
                </div>
            </section>

            {/* 4. Submission CTA (Solid Color Block) */}
            <section className="bg-purple-800 text-white py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Your Voice Heard</h2>
                    <p className="text-xl opacity-90 mb-8 font-light">
                        Did GFM Youth Community impact you? Share your testimony and help us inspire the next generation of leaders.
                    </p>
                    <button 
                        onClick={handleOpenModal}
                        className="inline-flex items-center justify-center px-8 py-3 bg-fuchsia-500 text-white rounded-full font-bold text-lg 
                                 hover:bg-fuchsia-600 transition-colors shadow-xl uppercase tracking-wider transform hover:scale-[1.02]"
                    >
                        <Zap className="w-5 h-5 mr-2" />
                        Share Your Testimony
                    </button>
                </div>
            </section>

            {/* NEW Footer Component */}
            <CreativeFooter />

            {/* MODAL IMPLEMENTATION */}
            <ReviewSubmissionModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            />
        </div>
    );
};

export default ReviewPage;

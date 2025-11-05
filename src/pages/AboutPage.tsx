import React from 'react';
import type { FC, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { 
    Target, Eye, Award, Users, Lightbulb, Heart, Zap, CheckCircle, 
    Facebook, Twitter, Instagram, Mail, Phone, Landmark, BookOpen
} from 'lucide-react';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// 2. TYPE DEFINITIONS & STATIC DATA

interface Leader {
    name: string;
    role: string;
    // Type is now 'string' since we use absolute paths
    image: string; 
}

interface FeatureItemProps {
    icon: React.ElementType; 
    title: string;
    description: string;
}

// New interface for the History Cards
interface HistoryCardProps {
    year: string;
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor: string;
}

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className: string;
    fallback?: string;
}

// CRITICAL: Define the base path for assets. This path MUST match where the images are placed 
// in your 'public' folder (e.g., public/images/ben.jpg).
const ASSET_PATH = '/images/'; 

const LEADERSHIP_TEAM: Leader[] = [
    // ABSOLUTE PATHS: These paths are correct for accessing files in the public/images folder.
    { name: 'BENEDICT DANIEL', role: 'UNIT HEAD GFM YOUTHS', image: 'src/assets/images/ben.jpg' },
    { name: 'EZEKIEL ISAIAH', role: 'ASST. UNIT HEAD GFM YOUTHS', image: 'src/assets/images/isaiah.jpg' },
    { name: 'USIGBE PRINCESS', role: 'FIN. SECRETARY GFM YOUTHS', image: 'src/assets/images/prinx.jpg' },
    { name: 'AJIK MICHELLE', role: 'ADMIN UNIT GFM YOUTHS', image: 'src/assets/images/michelle.jpg' },
    { name: 'NANLE PANMUN', role: 'ASST. ADMIN GFM YOUTHS', image: 'src/assets/images/HOOI.jpg' },
    { name: 'MAHLULE PRECIOUS', role: 'WELFARE COORDINATOR GFM YOUTHS', image: 'src/assets/images/officials.jpg' },
    { name: 'JONATHAN MIRACLE', role: 'DANCE DIRECTOR GFM YOUTHS', image: 'src/assets/images/miracle.jpg' },
    { name: 'WAKAWA HYELZIRA', role: 'WEB DEVELOPER/TECH DIRECTOR', image: 'src/assets/images/hyelzira.jpg' },
    { name: 'AMBRUCE ISRAEL', role: 'MEDIA DIRECTOR GFM YOUTHS', image: 'src/assets/images/bruce.jpg' },
    { name: 'MAIMAKO JESSE', role: 'MUSIC/SOUND DIRECTOR GFM YOUTHS', image: 'src/assets/images/jesse.jpg' },
    { name: 'BITRUS JOSHUA DANG', role: 'CREATIVE DESIGNER GFM YFM YOUTHS', image: 'src/assets/images/joshua.jpg' },
    { name: 'KUBA DESMOND', role: 'POLITICAL DIRECTOR GFM YOUTHS', image: 'src/assets/images/desmond.jpg' },
];

const MISSION_GOALS = [
    {
        icon: Lightbulb,
        title: "Hope for the hopeless",
        description: "To reach out to the hopeless and widows in communities; to help them become holistically developed as God originally intended for mankind ('James 1:27, Psl.41:1-2, Mat.25:35-40')"
    },
    {
        icon: Heart,
        title: "To equip and perfect the saints",
        description: "Through the ministry of the word and the Holy Spirit ('Ephesians 4:11-13')"
    },
    {
        icon: Zap,
        title: "Power of the Spirit",
        description: "To demonstrate the Holy Spirit Power through miracles, signs and wonders ('Isaiah 8:18, 2 Corinthians 12:12')"
    },
    {
        icon: CheckCircle,
        title: "Transformation",
        description: "To transform indidviduals and territories through strategic prayers and holistic empowerment ('Ezekiel 22:30, Isaiah 56:7')"
    }
];

// New Static Data for History Section
const GFM_YOUTH_HISTORY: HistoryCardProps[] = [
    {
        year: '1998',
        title: 'THE FOUNDATION',
        description: 'It came to birth on the 25th December 1998 and was formally registered with the COOPERATE AFFAIRS COMMISSION (CAC) in 2007, under the provision of the Companies and Allied Matters Act (CAMA) with certificate of registration no. CAC/IT/NO 263303',
        icon: Landmark,
        iconColor: 'text-purple-600',
    },
    {
        year: '2007', 
        title: 'ABOUT GLOBAL FLAME',
        description: 'A commission called to restore the Glory of God to mankind in all nations of the world through the apostolic and prophetic platforms.',
        icon: Users,
        iconColor: 'text-fuchsia-600',
    },
    {
        year: '2024',
        title: 'BIRTHING OF THE COMMUINITY',
        description: 'The birthing of the Global Flames Youths Community was on the 10th Nov. 2024 and has expanded widely to the glory of the most high, branching out to different groups and having atleast 194+ members.',
        icon: BookOpen,
        iconColor: 'text-yellow-600',
    },
];

// 3. UTILITY COMPONENTS

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ 
    src, 
    alt, 
    className, 
    // Fallback uses the public ASSET_PATH for consistency
    fallback = `${ASSET_PATH}default-profile.jpg` 
}) => (
    <img
        src={src}
        alt={alt}
        className={className}
        // This handles cases where the main image path is broken
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            console.log(`Failed to load: ${src}. Falling back to: ${fallback}`); // Helpful debug log
            // Prevent infinite loop if the fallback also fails
            (e.target as HTMLImageElement).onerror = null; 
            (e.target as HTMLImageElement).src = fallback;
        }}
    />
);

const FeatureItem: FC<FeatureItemProps> = ({ icon: IconComponent, title, description }) => (
    <div className="flex items-start space-x-4">
        <IconComponent className="w-8 h-8 text-fuchsia-600 shrink-0 mt-1" />
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

// New Component for History Card
const HistoryCard: FC<HistoryCardProps> = ({ year, title, description, icon: IconComponent, iconColor }) => (
    <div className="relative p-6 bg-white rounded-xl shadow-xl border-t-4 border-fuchsia-400 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white shadow-lg border-2 border-fuchsia-400 ${iconColor}`}>
            <IconComponent className="w-6 h-6" />
        </div>
        <div className="mt-4 pt-4 text-center">
            <p className="text-2xl font-extrabold text-fuchsia-700 mb-2">{year}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    </div>
);

// 4. FOOTER COMPONENT

const ProfessionalFooter: FC = () => (
    <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 lg:gap-x-12">
                
                {/* 1. Logo/Mission Statement */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-blue-200xl font-bold text-white mb-4 tracking-tight">GFM <span className="text-fuchsia-400">YOUTH</span></h3>
                    <p className="text-sm leading-relaxed mb-3">
                        Raising a generation of purpose-driven leaders manifesting the fullness of Christ's Reality.
                    </p>
                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com/gfmyouth" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com/gfmyouth" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://instagram.com/gfmyouth" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4 border-b border-fuchsia-600 pb-1">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/activities" className="hover:text-fuchsia-400 transition-colors">Activities</Link></li>
                        <li><Link to="/team" className="hover:text-fuchsia-400 transition-colors">Team</Link></li>
                        <li><Link to="/reviews" className="hover:text-fuchsia-400 transition-colors">Reviews</Link></li>
                        <li><Link to="/contact" className="hover:text-fuchsia-400 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* 3. Resources/Legal */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4 border-b border-fuchsia-600 pb-1">Legal & Info</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/about" className="hover:text-fuchsia-400 transition-colors">Our Story</Link></li>
                        <li><Link to="/privacy" className="hover:text-fuchsia-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-fuchsia-400 transition-colors">Terms of Use</Link></li>
                        <li><Link to="/faq" className="hover:text-fuchsia-400 transition-colors">FAQs</Link></li>
                    </ul>
                </div>

                {/* 4. Contact Information */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4 border-b border-fuchsia-600 pb-1">Get in Touch</h4>
                    <address className="not-italic space-y-3 text-sm">
                        <p className="flex items-start">
                            <Mail className="w-4 h-4 mr-2 mt-1 text-fuchsia-500 shrink-0" />
                            <a href="mailto:info@gfmyouth.org" className="hover:text-fuchsia-400">houseofoperaworld@gmail.com</a>
                        </p>
                        <p className="flex items-start">
                            <Phone className="w-4 h-4 mr-2 mt-1 text-fuchsia-500 shrink-0" />
                            <a href="tel:+1234567890" className="hover:text-fuchsia-400">(+234)802 642 9018</a>
                        </p>
                        <p className="text-gray-400 pt-2">
                            Zarmaganda, Off Rayfield Road Jos , Plateau State
                        </p>
                    </address>
                </div>
            </div>
            
            {/* Copyright Line */}
            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} GFM Youth Community. All rights reserved. | <span className="text-xs">Built with <Heart className="w-3 h-3 inline-block text-red-500" /> for the Future.</span>
                </p>
            </div>
        </div>
    </footer>
);

// 5. MAIN ABOUT PAGE COMPONENT

const AboutPage: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* Hero Section (Unchanged) */}
            <section className="relative bg-linear-to-br from-purple-800 to-fuchsia-700 py-24 md:py-32 px-6 text-white text-center overflow-hidden">
                {/* Background Pattern/Graphic */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <Zap className="absolute top-1/4 left-1/4 w-32 h-32 text-fuchsia-300 transform rotate-45" />
                    <Award className="absolute bottom-1/4 right-1/4 w-24 h-24 text-purple-300 transform -rotate-45" />
                    <Lightbulb className="absolute top-1/2 left-10 w-48 h-48 text-fuchsia-300 opacity-50 transform scale-150 rotate-12" />
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter leading-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-200 to-white">
                            ABOUT GLOBAL FLAMES YOUTH COMMUINITY
                        </span>
                    </h1>
                    <p className="text-xl md:text-1xl font-light opacity-100 max-w-2xl mx-auto">
                        Discover Our Journey, Our Purpose, and the Leaders Who Drive Us.
                    </p>
                    <Link 
                        to="/contact" 
                        className="mt-8 inline-flex items-center px-8 py-4 bg-fuchsia-500 text-purple-900 rounded-full font-bold text-medium hover:bg-yellow-300 transition-colors shadow-lg group"
                    >
                        Join Our Movement 
                        <Users className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                    </Link>
                </div>
            </section>

            {/* Our Mission Section */}
            <section id="mission" className="max-w-7xl mx-auto py-20 px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">AIMS AND OBJECTIVES</p>
                        <h2 className="text-3xl font-bold mb-5 text-gray-900">Our Vision: Raising Nations, Shaping Futures</h2>
                        <p className="text-gray-700 leading-relaxed mb-6 border-l-4 border-fuchsia-400 pl-4 italic">
                            "To raise a people of power who will manifest the Realities of the fullness of Christ through the Spirit."
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Is the same mission Jesus gave his followers: "Go therefore and make disciples of all nations"
                            ("Matt. 28:19-20")
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                            {MISSION_GOALS.map((item, index) => (
                                <FeatureItem 
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        {/* Main Mission Image */}
                        <ImageWithFallback
                            src={'/images/deliver.jpg'} 
                            alt="Youth engaging in mission"
                            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-fuchsia-400"
                            fallback={`${ASSET_PATH}default-mission.jpg`}
                        />
                    </div>
                </div>
            </section>
            
            {/* NEW HISTORY TIMELINE SECTION */}
            <section id="history" className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">OUR HERITAGE</p>
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">OUR HISTORIC JOURNEY</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            From a foundational vision to a thriving movement — a look back at the defining moments that shaped GLOBAL FLAMES Youth.
                        </p>
                    </div>

                    {/* History Cards Grid */}
                    <div className="relative grid md:grid-cols-3 gap-12 pt-6">
                        {/* Timeline Connector Line (for visual effect on larger screens) */}
                        <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-fuchsia-200 z-0 transform translate-y-3/4"></div>

                        {GFM_YOUTH_HISTORY.map((card, index) => (
                            <HistoryCard 
                                key={index}
                                year={card.year}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                                iconColor={card.iconColor}
                            />
                        ))}
                    </div>

                </div>
            </section>
            
            {/* Our Vision Section (Unchanged) */}
            <section id="vision" className="bg-fuchsia-50 py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking">GLOBAL FLAME( APOSTLE DANJUMA MUSA GAKSU)</p>
                    <h2 className="text-2xl font-sm mb-6 text-gray-900">OUR MOTTO: Raising a people of power who will manifest the kingdom and the realities of the fullness
                        of Christ through the Holy Spirit. </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
                        MISSION:: Immense salvation of souls, equipping the saints and manifesting the kingdom
                        through the demonstration of the Holy Spirit Power.
                    </p>
                    <h2 className="text-5xl font-bold mb-10 text-gray-950">CORE VALUES</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-t-3 border-purple-600 hover:shadow-2xl transition-shadow duration-300">
                            <Target className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-800"> Commission</h3>
                            <p className="text-gray-600 leading-relaxed">
                              --- We are committed to -- God and the ministry of the Holy Spirit in all we do.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-fuchsia-600 hover:shadow-2xl transition-shadow duration-300">
                            <Eye className="w-10 h-10 text-fuchsia-700 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Fellowship</h3>
                            <p className="text-gray-600 leading-relaxed">
                              --- To be at the forefront of youth development through Prayer, Fellowships and Character Building.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-yellow-400 hover:shadow-1xl transition-shadow duration-300">
                            <Award className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Integrity</h3>
                            <p className="text-gray-600 leading-relaxed">
                              --- To cultivate love, integrity and accountability.
                            </p>
                        </div>
                          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-3 border-purple-600 hover:shadow-2xl transition-shadow duration-300">
                            <Target className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-800"> Excellence</h3>
                            <p className="text-gray-600 leading-relaxed">
                            --- Anointing and Excellence.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-t-3 border-fuchsia-600 hover:shadow-2xl transition-shadow duration-300">
                            <Award className="w-10 h-10 text-fuchsia-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-gray-800"> Partnerships</h3>
                            <p className="text-gray-600 leading-relaxed">
                            --- Engaging in Fruitful partnerships.
                            </p>
                        </div>
                    </div>
                    <Link
                        to="/services"
                        className="mt-12 inline-flex items-center px-8 py-4 bg-fuchsia-700 text-white rounded-full font-bold text-lg hover:bg-purple-800 transition-colors shadow-lg"
                    >
                        Explore Our Programs <Target className="w-5 h-5 ml-3" />
                    </Link>
                </div>
            </section>


            {/* Our Leadership Section  */}
            <section id="leadership" className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-12">
                    <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">MEET THE TEAM</p>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">CORE LEADERSHIP TEAM</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        Our dedicated team of youths, mentors, and leadership members work tirelessly to ensure every young person receives the support, understanding and guidance they need to thrive
                        and know God more.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LEADERSHIP_TEAM.map((leader, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                            {/* Image Container */}
                            <div className="relative overflow-hidden w-full h-60 bg-gray-200 flex items-center justify-center">
                                <div className="absolute inset-0 bg-yellow-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                {/* Image is loaded using the ImageWithFallback component, referencing the absolute path */}
                                <ImageWithFallback
                                    src={leader.image} 
                                    alt={leader.name}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                                    fallback={`${ASSET_PATH}default-profile-thumb.jpg`} 
                                />
                            </div>
                            
                            {/* Text Content */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{leader.name}</h3>
                                <p className="text-fuchsia-600 text-sm font-medium uppercase">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action - Join the Team */}
            <section className="bg-black text-white py-12 px-5 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-medium mb-3">Be Part of Something Bigger</h2>
                    <p className="text-medium opacity-60 mb-6">
                        Our growth is powered by passionate individuals. Explore opportunities to contribute your talents!
                    </p>
                    <Link 
                        to="/volunteer" 
                        className="inline-flex items-center px-8 py-4 bg-fuchsia-600 text-white rounded font-bold text-medium hover:bg-purple-600 transition-colors shadow-lg"
                    >
                        Volunteer With Us <Users className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>

            {/* Professional Footer (Unchanged) */}
            <ProfessionalFooter />

        </div>
    );
};

export default AboutPage;

// src/ContactPage.tsx
import React, { useState } from 'react';
import type { FC, SyntheticEvent } from 'react'; 
import { 
    Mail, MapPin, Phone, MessageSquare, Send, Instagram, Facebook, Twitter, 
} from 'lucide-react';

// ----------------------------------------------------------------------
// 1. TYPE DEFINITIONS
// ----------------------------------------------------------------------

interface InfoCardProps {
    icon: React.ElementType; 
    title: string;
    detail: string;
    link: string;
}

// ----------------------------------------------------------------------
// 2. STATIC DATA (FINALIZED LOCATION DETAILS)
// ----------------------------------------------------------------------

const LOCATION_QUERY = "Zarmaganda Diye, Off Rayfield Road, Jos, Nigeria";
const ENCODED_LOCATION = encodeURIComponent(LOCATION_QUERY);

// 1. Link for the "Get Directions" button (opens Google Maps web/app)
const GOOGLE_MAPS_LINK = `http://maps.google.com/?q=${ENCODED_LOCATION}`;

// 2. URL for the iFrame (embed view, centered on the location)
// This embed URL typically shows the marker on the map.
const MAP_EMBED_URL = `http://maps.google.com/maps?q=${ENCODED_LOCATION}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const CONTACT_INFO = [
    {
        icon: Mail,
        title: "Email Address",
        detail: "houseofoperaworld@gmail.com",
        link: "mailto:info@gfm-youth.org",
    },
    {
        icon: Phone,
        title: "Phone Number",
        detail: "+234 802 642 9018",
        link: "tel:+2348001234567",
    },
    {
        icon: MapPin,
        title: "Main Location",
        detail: LOCATION_QUERY, 
        // Use the direct map link for the info card
        link: GOOGLE_MAPS_LINK,
    },
];

const SOCIAL_LINKS = [
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Twitter, name: 'X (Twitter)', url: '#', color: 'text-blue-400' },
];

// ----------------------------------------------------------------------
// 3. UTILITY COMPONENTS (Unchanged logic)
// ----------------------------------------------------------------------

const ContactInfoCard: FC<InfoCardProps> = ({ icon: IconComponent, title, detail, link }) => (
    <a href={link} className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-3 border-fuchsia-600 group" target={title === "Main Location" ? "_blank" : "_self"} rel="noopener noreferrer">
        <IconComponent className="w-8 h-8 text-fuchsia-600 mb-2 group-hover:text-purple-700 transition-colors" />
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-900 font-medium">{detail}</p>
    </a>
);

// ----------------------------------------------------------------------
// 4. MAIN CONTACT PAGE COMPONENT
// ----------------------------------------------------------------------

const ContactPage: FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! Your message has been noted.`);
        setFormData({ name: '', email: '', message: '' }); 
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* Header Section */}
            <section className="bg-purple-800 text-white py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-3 uppercase tracking-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-300 to-white">
                            GET IN TOUCH
                        </span>
                    </h1>
                    <p className="text-xl md:text-1xl font-light opacity-90">
                        We are here to answer your questions, hear your testimonies, and connect with you.
                    </p>
                </div>
            </section>

            {/* Direct Contact Information Section */}
            <section className="max-w-5xl mx-auto py-16 px-6">
                <div className="text-center mb-12">
                    <p className="text-fuchsia-700 font-semibold mb-2 text-sm uppercase tracking-widest">CONNECT DIRECTLY</p>
                    <h2 className="text-2xl font-bold text-gray-900">REACH US THROUGH ANY CHANNEL</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {CONTACT_INFO.map((item, index) => (
                        <ContactInfoCard key={index} {...item} />
                    ))}
                </div>
            </section>
            
            {/* Contact Form Section (The main focus) */}
            <section className="bg-white py-12 px-6 shadow-inner">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    
                    {/* Form Description */}
                    <div className="md:sticky md:top-8">
                        <MessageSquare className="w-9 h-9 text-fuchsia-600 mb-4" />
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">SEND US A MESSAGE</h2>
                        <p className="text-gray-700 leading-relaxed mb-5">
                            Have a question about our programs, a prayer request, or just want to say hello? Use the form below, and our team will get back to you promptly.
                        </p>
                        
                        {/* Social Links */}
                        <div className="pt-4 border-t border-gray-100">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Connect live with us</h3>
                            <div className="flex space-x-3">
                                {SOCIAL_LINKS.map((social) => {
                                    const SocialIcon = social.icon;
                                    return (
                                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${social.color}`}>
                                            <SocialIcon className="w-6 h-6" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* The Form */}
                    <form onSubmit={handleSubmit} className="p-8 bg-gray-50 border border-fuchsia-100 rounded-xl shadow-lg">
                        <div className="mb-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors bg-white"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors bg-white"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors resize-none bg-white"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full flex items-center justify-center px-8 py-4 bg-fuchsia-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-md"
                        >
                            <Send className="w-5 h-5 mr-3" />
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Map Section (Using iFrame for Google Maps) */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Find Our Physical Location</h2>
                        <p className="text-gray-600">Join us for worship and fellowship at our main gathering spot.</p>
                    </div>
                    {/* The iFrame embedding the Google Map */}
                    <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl border-4 border-fuchsia-500/50">
                        <iframe
                            // Using the live MAP_EMBED_URL variable
                            src={MAP_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Global Flame Ministry Auditorium Location"
                        ></iframe>
                    </div>
                    
                    <div className="text-center mt-6">
                        <a 
                            // Using the live GOOGLE_MAPS_LINK variable
                            href={GOOGLE_MAPS_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-lg font-semibold text-fuchsia-700 hover:text-purple-700 transition-colors"
                        >
                            <MapPin className="w-5 h-5 mr-2" />
                            Get Directions on Google Maps
                        </a>
                    </div>
                </div>
            </section>


            {/* Footer Placeholder (You would typically use a shared Footer component) */}
            <footer className="bg-gray-900 text-gray-400 text-center py-8 px-6 text-sm">
                <div className="max-w-7xl mx-auto">
                    <p>© {new Date().getFullYear()} GFM Youth Community. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default ContactPage;
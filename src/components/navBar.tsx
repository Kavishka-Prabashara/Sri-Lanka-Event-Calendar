import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: If you're using Lucide icons, otherwise use SVG

const Navbar = () => {
    const [language, setLanguage] = useState<"si" | "ta" | "en">("si");
    const [menuOpen, setMenuOpen] = useState(false);

    const labels = {
        si: {
            home: "මුල් පිටුව",
            about: "අපි ගැන",
            events: "අවස්ථා",
            gallery: "පිංතූර ගොනුව",
            contact: "සම්බන්ධවන්න"
        },
        ta: {
            home: "முகப்பு",
            about: "எங்களை பற்றி",
            events: "நிகழ்வுகள்",
            gallery: "காட்சிப்பதிவு",
            contact: "தொடர்பு கொள்ள"
        },
        en: {
            home: "Home",
            about: "About",
            events: "Events",
            gallery: "Gallery",
            contact: "Contact"
        }
    };

    const navLinks = (
        <ul className="space-y-4 md:space-y-0 md:space-x-6 md:flex text-gray-700 font-medium">
            <li className="hover:text-red-500 cursor-pointer">{labels[language].home}</li>
            <li className="hover:text-red-500 cursor-pointer">{labels[language].about}</li>
            <li className="hover:text-red-500 cursor-pointer">{labels[language].events}</li>
            <li className="hover:text-red-500 cursor-pointer">{labels[language].gallery}</li>
            <li className="hover:text-red-500 cursor-pointer">{labels[language].contact}</li>
        </ul>
    );

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-50">
            {/* Website Name */}
            <div className="text-2xl font-bold text-red-600">Sri Lankan Festivals</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
                {navLinks}
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "si" | "ta" | "en")}
                    className="text-sm border px-3 py-1 rounded text-gray-700 font-medium hover:bg-gray-100"
                >
                    <option value="si">සිංහල</option>
                    <option value="ta">தமிழ்</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-2">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "si" | "ta" | "en")}
                    className="text-sm border px-3 py-1 rounded text-gray-700 font-medium hover:bg-gray-100"
                >
                    <option value="si">සිංහල</option>
                    <option value="ta">தமிழ்</option>
                    <option value="en">English</option>
                </select>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden z-40">
                    {navLinks}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

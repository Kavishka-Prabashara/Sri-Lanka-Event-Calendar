import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [language, setLanguage] = useState<"en" | "si" | "ta">("en");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const labels = {
        en: {
            home: "Home",
            about: "About",
            events: "Events",
            contact: "Contact"
        },
        si: {
            home: "මුල් පිටුව",
            about: "අපි ගැන",
            events: "අවස්ථා",
            contact: "සම්බන්ධවන්න"
        },
        ta: {
            home: "முகப்பு",
            about: "எங்களை பற்றி",
            events: "நிகழ்வுகள்",
            contact: "தொடர்பு கொள்ள"
        }
    };

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const navLinks = (
        <ul className="space-y-4 md:space-y-0 md:space-x-6 md:flex text-white font-medium">
            <li>
                <Link
                    to="/"
                    onClick={() => {
                        if (location.pathname === "/") scrollToId("home");
                    }}
                    className="hover:text-red-500 cursor-pointer"
                >
                    {labels[language].home}
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    onClick={() => {
                        if (location.pathname === "/") scrollToId("about");
                    }}
                    className="hover:text-red-500 cursor-pointer"
                >
                    {labels[language].about}
                </Link>
            </li>
            <li>
                <Link to="/calendar" className="hover:text-red-500 cursor-pointer">
                    {labels[language].events}
                </Link>
            </li>
            <li>
                <Link to="/helps" className="hover:text-red-500 cursor-pointer">
                    {labels[language].contact}
                </Link>
            </li>
        </ul>
    );

    return (
        <nav
            className="fixed top-0 w-full backdrop-blur-md shadow-md p-4 flex items-center justify-between z-50 rounded-xl mx-2 mt-2">

            <div className="text-2xl font-bold text-red-600">Sri Lankan Festivals</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
                {navLinks}
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "en" | "si" | "ta")}
                    className="text-sm border px-3 py-1 rounded text-white font-medium hover:bg-black hover:text-white"
                >
                    <option value="en">English</option>
                    <option value="si">සිංහල</option>
                    <option value="ta">தமிழ்</option>
                </select>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-2">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "en" | "si" | "ta")}
                    className="text-sm border px-3 py-1 rounded text-gray-100 font-medium hover:bg-gray-700"
                >
                    <option value="en">English</option>
                    <option value="si">සිංහල</option>
                    <option value="ta">தமிழ்</option>
                </select>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                    {menuOpen ? <X size={24}/> : <Menu size={24}/>}
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

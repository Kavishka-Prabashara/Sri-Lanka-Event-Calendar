import React, { useState } from "react";

const Navbar = () => {
    const [language, setLanguage] = useState<"si" | "ta" | "en">("si");

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

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-50">
            {/* Website Name */}
            <div className="text-2xl font-bold text-red-600">Sri Lankan Festivals</div>

            {/* Nav Links */}
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                <li className="hover:text-red-500 cursor-pointer">{labels[language].home}</li>
                <li className="hover:text-red-500 cursor-pointer">{labels[language].about}</li>
                <li className="hover:text-red-500 cursor-pointer">{labels[language].events}</li>
                <li className="hover:text-red-500 cursor-pointer">{labels[language].gallery}</li>
                <li className="hover:text-red-500 cursor-pointer">{labels[language].contact}</li>
            </ul>

            {/* Language Select */}
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "si" | "ta" | "en")}
                className="text-sm border px-3 py-1 rounded text-gray-700 font-medium hover:bg-gray-100"
            >
                <option value="si">සිංහල</option>
                <option value="ta">தமிழ்</option>
                <option value="en">English</option>
            </select>
        </nav>
    );
};

export default Navbar;

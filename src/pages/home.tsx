import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.jpg';

const Homes = () => {
    const navigate = useNavigate();

    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-center p-6 rounded-xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 transition duration-300">
                    Discover the Festivals that Bring Sri Lanka to Life
                </h1>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 transition duration-300">
                        Explore Festivals
                    </button>
                    <button
                        onClick={() => navigate('/calendar')}
                        className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 transition duration-300"
                    >
                        View Calendar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homes;

import bgImage from '../assets/bg.jpg'; // Make sure this path is correct

const Homes = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundColor: 'rgba(0,0,0,0.65)' // කළු පාට හා 60% විනිවිද භාවය
            }}
        >
            {/* අකුරු සහ බටන් */}
            <div className="relative z-10 text-center p-6 rounded-xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Discover the Festivals that Bring Sri Lanka to Life
                </h1>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Explore Festivals
                    </button>
                    <button className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        View Calendar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homes;
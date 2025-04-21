import bgImage from '..//assets/bg.jpg'; // Adjust the path to your actual image location

const Homes = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="text-center bg-opacity-50 p-6 rounded-xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Discover the Festivals that Bring Sri Lanka to Life
                </h1>
                <div className="flex justify-center gap-4">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                        Explore Festivals
                    </button>
                    <button type="button"
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Calendar
                </button>
            </div>
        </div>
</div>
)
    ;
};

export default Homes;

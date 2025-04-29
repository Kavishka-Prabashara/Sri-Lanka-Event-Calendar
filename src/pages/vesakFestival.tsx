import { Link } from 'react-router-dom';

const VesakFestival = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">වෙසක් උත්සවය</h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
                වෙසක් උත්සවය බුදු සරණයට යන ශ්‍රී ලාංකික බෞද්ධයන්ගේ විශේෂම දිනයි. මෙම දිනය බුදුරජාණන් වහන්සේ උපන්, සම්බෝධියට පත්වූ සහ පරිණිර්වාණයට පත්වූ දිනයක් ලෙස සැලකේ. මෙය ශ්‍රී ලංකාවේ දී බොහෝ විලාසිතාවන්ගෙන් සැමරේ. ආලෝක පුජා, දාන, සිල, භාවනා, වෙසක් තොරණ සහ කලා නිරූපණයන් ආදී විවිධ ක්‍රියාකාරකම් සිදු කෙරේ.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vesak Thorana Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-2">වෙසක් තොරණ</h2>
                    <p className="text-gray-600 mb-4">විදුලි ආලෝක වලින් අලංකාර කරන ලද තොරණ ඔබට දැකිය හැක.</p>
                    <Link
                        to="/calendar/vesak/thorana"
                        className="mt-auto inline-block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        තොරණ බලන්න
                    </Link>
                </div>

                {/* Vesak Card Sending Section */}
                <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-2">වෙසක් කාඩ් යවන්න</h2>
                    <p className="text-gray-600 mb-4">ඔබේ මිතුරන්ට සුභ පැතුම් කාඩ්පතක් යවන්න.</p>
                    <Link
                        to="/calendar/vesak/cards"
                        className="mt-auto inline-block bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                        කාඩ් යවන්න
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VesakFestival;


const festivals = [
    {
        month: 'January',
        name: 'Galle Literary Festival',
        description: 'Held in historic Galle with panel discussions, poetry, and international authors.',
    },
    {
        month: 'January',
        name: 'Duruthu Perahera',
        description: 'Procession at Kelaniya Temple commemorating Buddha’s visit, featuring dancers and elephants.',
    },
    {
        month: 'January',
        name: 'Thai Pongal',
        description: 'Tamil harvest festival offering thanks to Sun God with rice dishes and decorations.',
    },
    {
        month: 'February',
        name: 'Independence Day',
        description: 'National celebrations including parades, flag-hoisting, and cultural performances.',
    },
    {
        month: 'February',
        name: 'Navam Perahera',
        description: 'Colombo festival with dancers, drummers, and majestic elephants.',
    },
    {
        month: 'February',
        name: 'Maha Sivarathri',
        description: 'Commemorates the union of Lord Shiva and Parvati with all-night vigils and prayers.',
    },
    {
        month: 'April',
        name: 'Sinhala & Tamil New Year',
        description: 'Lunar New Year with firecrackers, sweets, and games marking end of harvest season.',
    },
    {
        month: 'May',
        name: 'Vesak Festival',
        description: 'Celebrates Buddha’s birth, enlightenment and nirvana with lanterns and pandals.',
    },
    {
        month: 'June',
        name: 'Poson Festival',
        description: 'Marks arrival of Buddhism with island-wide lanterns and alms giving.',
    },
    {
        month: 'July',
        name: 'Kandy Esala Perahera',
        description: 'Procession honoring the Tooth Relic of Buddha with dance, drums, and elephants.',
    },
    {
        month: 'August',
        name: 'Id Ul-Fitr (Ramadan)',
        description: 'Muslim festival ending the fasting month with feasts and prayers.',
    },
    {
        month: 'November',
        name: 'Deepavali',
        description: 'Hindu Festival of Lights celebrated with firecrackers, lamps, and feasts.',
    },
    {
        month: 'December',
        name: 'Christmas Day',
        description: 'Celebration of the birth of Jesus with decorations, prayers, and gatherings.',
    },
];

const CalenderPage = () => {
    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full border border-gray-300 text-sm text-left">
                <thead className="bg-blue-900 text-white">
                <tr>
                    <th className="px-4 py-2 border">Month</th>
                    <th className="px-4 py-2 border">Festival/Event</th>
                    <th className="px-4 py-2 border">Description</th>
                    <th className="px-4 py-2 border">Explore</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {festivals.map((festival, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition">
                        <td className="border px-4 py-2 align-top">{festival.month}</td>
                        <td className="border px-4 py-2 align-top font-semibold text-blue-800">
                            {festival.name}
                        </td>
                        <td className="border px-4 py-2 align-top">{festival.description}</td>
                        <td className="border px-4 py-2 align-top">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded">
                                Explore
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CalenderPage;

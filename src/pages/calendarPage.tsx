import FestivalCard from '../components/FestivalCard';

const festivals = [
    { month: 'January', title: 'Galle Literary Festival', description: 'Held in historic Galle with panel discussions, poetry, and international authors.', imageUrl: '/images/galle.jpg' },
    { month: 'January', title: 'Duruthu Perahera', description: 'Procession at Kelaniya Temple commemorating Buddha’s visit, featuring dancers and elephants.', imageUrl: '/images/duruthu.jpg' },
    { month: 'January', title: 'Thai Pongal', description: 'Tamil harvest festival offering thanks to Sun God with rice dishes and decorations.', imageUrl: '/images/thaipongal.jpg' },
    { month: 'February', title: 'Independence Day', description: 'National celebrations including parades, flag-hoisting, and cultural performances.', imageUrl: '/images/independence.jpg' },
    { month: 'February', title: 'Navam Perahera', description: 'Colombo festival with dancers, drummers, and majestic elephants.', imageUrl: '/images/navam.jpg' },
    { month: 'February', title: 'Maha Sivarathri', description: 'Commemorates the union of Lord Shiva and Parvati with all-night vigils and prayers.', imageUrl: '/images/sivarathri.jpg' },
    { month: 'April', title: 'Sinhala & Tamil New Year', description: 'Lunar New Year with firecrackers, sweets, and games marking end of harvest season.', imageUrl: '/images/newyear.jpg' },
    { month: 'May', title: 'Vesak Festival', description: 'Celebrates Buddha’s birth, enlightenment and nirvana with lanterns and pandals.', imageUrl: '/images/vesak.jpg' },
    { month: 'June', title: 'Poson Festival', description: 'Marks arrival of Buddhism with island-wide lanterns and alms giving.', imageUrl: '/images/poson.jpg' },
    { month: 'July', title: 'Kandy Esala Perahera', description: 'Procession honoring the Tooth Relic of Buddha with dance, drums, and elephants.', imageUrl: '/images/kandy.jpg' },
    { month: 'August', title: 'Id Ul-Fitr (Ramadan)', description: 'Muslim festival ending the fasting month with feasts and prayers.', imageUrl: '/images/ramadan.jpg' },
    { month: 'November', title: 'Deepavali', description: 'Hindu Festival of Lights celebrated with firecrackers, lamps, and feasts.', imageUrl: '/images/deepavali.jpg' },
    { month: 'December', title: 'Christmas Day', description: 'Celebration of the birth of Jesus with decorations, prayers, and gatherings.', imageUrl: '/images/christmas.jpg' },
];

const CalenderPage = () => {
    return (
        <div className=" min-h-screen py-10 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Sri Lanka Festivals & Events</h1>
            <div className="flex flex-col items-center space-y-8">
                {festivals.map((festival, index) => (
                    <FestivalCard
                        key={index}
                        month={festival.month}
                        title={festival.title}
                        description={festival.description}
                        imageUrl={festival.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default CalenderPage;

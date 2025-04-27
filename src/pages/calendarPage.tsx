import React from 'react';
import FestivalCard from '../components/FestivalCard';

interface Festival {
    id: number;
    month: string;
    title: string;
    description: string;
    imageUrl: string;
}

const festivals: Festival[] = [
    { id: 1, month: 'January', title: 'Galle Literary Festival', description: 'Held in historic Galle with panel discussions, poetry, and international authors.', imageUrl: '/images/galle.jpg' },
    { id: 2, month: 'January', title: 'Duruthu Perahera', description: 'Procession at Kelaniya Temple commemorating Buddha’s visit, featuring dancers and elephants.', imageUrl: '/images/duruthu.jpg' },
    { id: 3, month: 'January', title: 'Thai Pongal', description: 'Tamil harvest festival offering thanks to Sun God with rice dishes and decorations.', imageUrl: '/images/thaipongal.jpg' },
    { id: 4, month: 'February', title: 'Independence Day', description: 'National celebrations including parades, flag-hoisting, and cultural performances.', imageUrl: '/images/independence.jpg' },
    { id: 5, month: 'February', title: 'Navam Perahera', description: 'Colombo festival with dancers, drummers, and majestic elephants.', imageUrl: '/images/navam.jpg' },
    { id: 6, month: 'February', title: 'Maha Sivarathri', description: 'Commemorates the union of Lord Shiva and Parvati with all-night vigils and prayers.', imageUrl: '/images/sivarathri.jpg' },
    { id: 7, month: 'April', title: 'Sinhala & Tamil New Year', description: 'Lunar New Year with firecrackers, sweets, and games marking end of harvest season.', imageUrl: '/images/newyear.jpg' },
    { id: 8, month: 'May', title: 'Vesak Festival', description: 'Celebrates Buddha’s birth, enlightenment and nirvana with lanterns and pandals.', imageUrl: '/images/vesak.jpg' }, // <-- Corrected title to "Vesak Festival"
    { id: 9, month: 'June', title: 'Poson Festival', description: 'Marks arrival of Buddhism with island-wide lanterns and alms giving.', imageUrl: '/images/poson.jpg' },
    { id: 10, month: 'July', title: 'Kandy Esala Perahera', description: 'Procession honoring the Tooth Relic of Buddha with dance, drums, and elephants.', imageUrl: '/images/kandy.jpg' },
    { id: 11, month: 'August', title: 'Id Ul-Fitr (Ramadan)', description: 'Muslim festival ending the fasting month with feasts and prayers.', imageUrl: '/images/ramadan.jpg' },
    { id: 12, month: 'November', title: 'Deepavali', description: 'Hindu Festival of Lights celebrated with firecrackers, lamps, and feasts.', imageUrl: '/images/deepavali.jpg' },
    { id: 13, month: 'December', title: 'Christmas Day', description: 'Celebration of the birth of Jesus with decorations, prayers, and gatherings.', imageUrl: '/images/christmas.jpg' },
];

const FestivalsPage: React.FC = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Sri Lanka Festivals & Events
            </h1>
            <div className="flex flex-col items-center space-y-8">
                {festivals.map((festival) => (
                    <FestivalCard
                        key={festival.id} // <-- key is fine
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

export default FestivalsPage;

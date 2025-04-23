// pages/HolidayPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const HolidayPage: React.FC = () => {
    const { date } = useParams<{ date?: string }>();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">නිවාඩු දිනය</h1>
                <p>දිනය: {date}</p>
                <p>මෙම දිනය ශ්‍රී ලංකාවේ නිවාඩු දිනයකි.</p>
            </div>
        </div>
    );
};

export default HolidayPage;

import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import ImageEditor from '../components/ImageEditor';
import DownloadButton from '../components/DownloadButtons';

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [renderedImage, setRenderedImage] = useState(null);
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleImageSelect = (image) => {
        setSelectedImage(image);
        setRenderedImage(null); // නව රූපයක් තේරූ විට පෙර රූපය ඉවත් කරන්න
    };

    // ImageEditor වෙතින් සංස්කරණය කළ රූපය ලබා ගන්නා callback එකක්
    const handleRenderedImage = (dataURL) => {
        setRenderedImage(dataURL);
    };

    const handleWhatsappShare = () => {
        if (renderedImage && whatsappNumber) {
            const message = `ඔබ වෙනුවෙන් සාදන ලද රූපය මෙන්න!`;
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message + ' ' + renderedImage)}`;
            window.open(whatsappLink, '_blank');
        } else {
            alert('කරුණාකර රූපයක් සාදා WhatsApp අංකය ඇතුළත් කරන්න.');
        }
    };

    const handleEmailShare = () => {
        if (renderedImage && email) {
            const subject = 'ඔබ වෙනුවෙන් සාදන ලද රූපය';
            const body = `ඔබ වෙනුවෙන් සාදන ලද රූපය ඇමුණා ඇත.\n\n${renderedImage}`;
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, '_blank');
        } else {
            alert('කරුණාකර රූපයක් සාදා ඊමේල් ලිපිනය ඇතුළත් කරන්න.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">පින්තූර සංස්කාරකය</h1>
            <ImageGallery onImageSelect={handleImageSelect} />

            {selectedImage && (
                <div className="mt-4 border p-4 rounded">
                    <h2 className="text-xl font-semibold mb-2">රූපය සංස්කරණය කරන්න</h2>
                    <ImageEditor selectedImage={selectedImage} onRender={handleRenderedImage} />
                    <DownloadButton renderedImage={renderedImage} />

                    <div className="mt-4">
                        <label htmlFor="whatsappNumber" className="block text-gray-700 text-sm font-bold mb-2">WhatsApp අංකය:</label>
                        <input
                            type="text"
                            id="whatsappNumber"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            placeholder="උදා: 947xxxxxxxx"
                        />
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                            onClick={handleWhatsappShare}
                        >
                            WhatsApp වෙත යවන්න
                        </button>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">ඊමේල් ලිපිනය:</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ඔබගේ ඊමේල් ලිපිනය"
                        />
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                            onClick={handleEmailShare}
                        >
                            ඊමේල් කරන්න
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
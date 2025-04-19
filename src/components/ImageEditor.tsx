import  { useState, useEffect, useRef } from 'react';

const ImageEditor = ({ selectedImage }) => {
    const [senderName, setSenderName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [renderedImage, setRenderedImage] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (selectedImage) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                // පෙළෙහි විලාසය සකසන්න
                ctx.font = '24px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';

                // යවන්නාගේ නම රූපයේ උඩින් ලියන්න
                ctx.fillText(senderName, canvas.width / 2, 50); // පිහිටීම වෙනස් කළ හැක

                // ලබන්නාගේ නම රූපයේ පහළින් ලියන්න
                ctx.fillText(receiverName, canvas.width / 2, canvas.height - 30); // පිහිටීම වෙනස් කළ හැක

                // රූපය දත්ත URL එකක් ලෙස සකසන්න
                setRenderedImage(canvas.toDataURL('image/png'));
            };

            img.src = selectedImage.src;
        } else {
            setRenderedImage(null);
        }
    }, [selectedImage, senderName, receiverName]);

    return (
        <div>
            {selectedImage && (
                <div className="mb-4">
                    <canvas ref={canvasRef} className="hidden" />
                    {renderedImage && <img src={renderedImage} alt="Edited Image" className="max-w-full h-auto border rounded" />}
                </div>
            )}
            <div className="mb-2">
                <label htmlFor="senderName" className="block text-gray-700 text-sm font-bold mb-2">ඔබේ නම:</label>
                <input
                    type="text"
                    id="senderName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="receiverName" className="block text-gray-700 text-sm font-bold mb-2">ලබන්නාගේ නම:</label>
                <input
                    type="text"
                    id="receiverName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ImageEditor;
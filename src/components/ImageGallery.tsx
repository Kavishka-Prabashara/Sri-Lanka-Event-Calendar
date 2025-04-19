import React, { useState } from 'react';

const ImageGallery = ({ onImageSelect }) => {
    const [images, setImages] = useState([
        // ඔබගේ රූප වල මූලාශ්‍ර මෙහි ඇතුළත් කරන්න
        { id: 1, src: 'https://images.nightcafe.studio/jobs/UDPA2z6gkPAebYAELcNO/UDPA2z6gkPAebYAELcNO--1--mvzt5.jpg?tr=w-1600,c-at_max', name: 'Image 1' },
        { id: 2, src: 'https://images.nightcafe.studio/jobs/UDPA2z6gkPAebYAELcNO/UDPA2z6gkPAebYAELcNO--1--mvzt5.jpg?tr=w-1600,c-at_max', name: 'Image 2' },
        // තවත් රූප...
    ]);

    const handleImageClick = (image) => {
        onImageSelect(image);
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
                <div
                    key={image.id}
                    className="cursor-pointer border rounded"
                    onClick={() => handleImageClick(image)}
                >
                    <img src={image.src} alt={image.name} className="w-full h-auto" />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
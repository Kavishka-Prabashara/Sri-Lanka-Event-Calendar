import React, { useState } from 'react';
import { ImageType } from '../types'; // ✅ Import the shared type

interface ImageGalleryProps {
    onImageSelect: (image: ImageType) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ onImageSelect }) => {
    const [images] = useState<ImageType[]>([
        {
            id: 1,
            src: 'https://images.nightcafe.studio/jobs/UDPA2z6gkPAebYAELcNO/UDPA2z6gkPAebYAELcNO--1--mvzt5.jpg?tr=w-1600,c-at_max',
            name: 'Image 1',
            alt: 'Image 1 description',
        },
        {
            id: 2,
            src: 'https://images.nightcafe.studio/jobs/UDPA2z6gkPAebYAELcNO/UDPA2z6gkPAebYAELcNO--1--mvzt5.jpg?tr=w-1600,c-at_max',
            name: 'Image 2',
            alt: 'Image 2 description',
        },
    ]);

    const handleImageClick = (image: ImageType) => {
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
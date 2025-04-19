import React, { useState, useEffect, useRef } from 'react';

interface SelectedImage {
    src: string;
    // Consider if you can be more specific about other potential properties
    // [key: string]: any;
}

interface ImageEditorProps {
    selectedImage: SelectedImage;
    onRender?: (dataUrl: string) => void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ selectedImage, onRender }) => {
    const [senderName, setSenderName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [renderedImage, setRenderedImage] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (selectedImage) {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const img = new Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                ctx.font = '24px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';

                ctx.fillText(senderName, canvas.width / 2, 50);
                ctx.fillText(receiverName, canvas.width / 2, canvas.height - 30);

                const dataUrl = canvas.toDataURL('image/png');
                setRenderedImage(dataUrl);
                onRender?.(dataUrl); // Call callback if provided
            };

            img.src = selectedImage.src;
        } else {
            setRenderedImage(null);
        }
    }, [selectedImage, senderName, receiverName, onRender]);

    return (
        <div>
            {selectedImage && (
                <div className="mb-4">
                    <canvas ref={canvasRef} className="hidden" />
                    {renderedImage && (
                        <img src={renderedImage} alt="Edited" className="max-w-full h-auto border rounded" />
                    )}
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
import React from 'react';

interface DownloadButtonProps {
    renderedImage: string | null;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ renderedImage }) => {
    const handleDownload = () => {
        if (renderedImage) {
            const link = document.createElement('a');
            link.href = renderedImage;
            link.download = 'customized_image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('බාගත කිරීමට රූපයක් තෝරා සංස්කරණය කරන්න.');
        }
    };

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleDownload}
            disabled={!renderedImage}
        >
            බාගන්න
        </button>
    );
};

export default DownloadButton;

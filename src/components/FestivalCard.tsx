type FestivalCardProps = {
    month: string;
    title: string;
    description: string;
    imageUrl: string;
};

const FestivalCard = ({ month, title, description, imageUrl }: FestivalCardProps) => {
    return (
        <div
            className="bg-cover bg-center shadow-2xl rounded-2xl p-8 w-full max-w-4xl mx-auto text-white relative overflow-hidden"
            style={{ backgroundImage: `url(${imageUrl})`, height: '350px' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div> {/* Overlay */}

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="text-base">{month}</div>
                    <h2 className="text-4xl font-bold mt-2">{title}</h2>
                    <p className="mt-4 text-lg">{description}</p>
                </div>
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full w-max text-lg font-semibold">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default FestivalCard;

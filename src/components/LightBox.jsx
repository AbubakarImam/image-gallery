import PropTypes from 'prop-types';

const Lightbox = ({ image, closeLightbox }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 max-w-3xl">
                <div className="relative">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <img src={image.imageUrl} alt={image.tag} className="w-full max-h-96 object-contain" />
                </div>
                <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-800">{image.tag}</h3>
                    {/* Add any other details you want to display */}
                </div>
            </div>
        </div>
    );


};


Lightbox.propTypes = {
    image: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
    }).isRequired,
    closeLightbox: PropTypes.func.isRequired,
};

export default Lightbox;

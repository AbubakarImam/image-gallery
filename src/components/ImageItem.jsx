import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

const ImageItem = ({ image, index, moveImage, selectedImage, openLightbox, isLoading, handleImageLoad }) => {
    const [{ isDragging }, ref] = useDrag({
        type: 'IMAGE',
        item: { index },
    });

    const [, drop] = useDrop({
        accept: 'IMAGE',
        hover: (dragged) => {
            if (dragged.index !== index) {
                moveImage(dragged.index, index);
                dragged.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className={`image-item ${isDragging ? 'dragging' : ''}`}>
            <li key={image.id} className="relative">
                <a
                    className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    onClick={() => openLightbox(image)}
                    href="#"
                >
                    <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                        {isLoading && selectedImage && selectedImage.id === image.id ? (
                            <div className="flex justify-center items-center w-full h-full bg-gray-200">
                                Loading...
                            </div>
                        ) : (
                            <img
                                className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                                src={image.imageUrl}
                                alt={image.tag}
                                onLoad={handleImageLoad}
                            />
                        )}
                    </div>
                </a>
                <span className="absolute top-0 left-0 w-full bg-gray-200 bg-opacity-30 text-white text-xs py-1 px-2 rounded">
                    {image.tag}
                </span>
            </li>
        </div>
    );
};

ImageItem.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    moveImage: PropTypes.func.isRequired,
    selectedImage: PropTypes.object,
    openLightbox: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleImageLoad: PropTypes.func.isRequired,
};

export default ImageItem;

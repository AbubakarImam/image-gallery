import { useState } from 'react';
import imageData from './imageData';
import Lightbox from './LightBox';
import Footer from './footer';
import Login from './Login';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ImageItem from './ImageItem';
import SearchBar from './SearchBar'; // Import the SearchBar component

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [filteredImages, setFilteredImages] = useState(null); // Add state for filtered images

    // Add a state to manage the order of images
    const [images, setImages] = useState(imageData);

    const openLightbox = (image) => {
        setSelectedImage(image);
        setIsLoading(true);
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const moveImage = (fromIndex, toIndex) => {
        const updatedImages = [...images];
        const [movedImage] = updatedImages.splice(fromIndex, 1);
        updatedImages.splice(toIndex, 0, movedImage);
        setImages(updatedImages);
    };

    const preloadImages = (images) => {
        images.forEach(image => {
            const img = new Image();
            img.src = image.imageUrl;
        });
    };

    preloadImages(imageData);

    const handleSearch = (tag) => {
        if (tag.trim() !== "") {
            const filteredImages = images.filter(image => image.tag.toLowerCase() === tag.toLowerCase());
            setFilteredImages(filteredImages);
        } else {
            setFilteredImages(null); // Reset filteredImages to null when search input is empty
        }
    };


    return (
        <div className="">
            {isAuthenticated ? (
                <DndProvider backend={HTML5Backend}>
                    <SearchBar handleSearch={handleSearch} />
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {filteredImages ? filteredImages.map((image, index) => (
                            <ImageItem
                                key={image.id}
                                image={image}
                                index={index}
                                moveImage={moveImage}
                                selectedImage={selectedImage}
                                openLightbox={openLightbox}
                                closeLightbox={closeLightbox}
                                isLoading={isLoading}
                                handleImageLoad={handleImageLoad}
                            />
                        )) : images.map((image, index) => (
                            <ImageItem
                                key={image.id}
                                image={image}
                                index={index}
                                moveImage={moveImage}
                                selectedImage={selectedImage}
                                openLightbox={openLightbox}
                                closeLightbox={closeLightbox}
                                isLoading={isLoading}
                                handleImageLoad={handleImageLoad}
                            />
                        ))}
                    </ul>
                    <Footer />
                </DndProvider>
            ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
            )}

            {selectedImage && (
                <Lightbox
                    image={selectedImage}
                    closeLightbox={closeLightbox}
                />
            )}
        </div>
    );
};

export default ImageGallery;

import React from 'react';

const PhotoThumbnail = ({ photo, isSelected, onClick }) => {
    return (
        <div className='thumbnails-item'>
            <img
                src={photo.src}
                alt={photo.alt}
                className={`thumbnail ${isSelected ? 'selected' : ''}`}
                onClick={() => onClick(photo)}
            />
            <h3  onClick={() => onClick(photo)}>Открыть</h3>
        </div>

    );
};

export default PhotoThumbnail;
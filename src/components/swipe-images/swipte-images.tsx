
import React from 'react';

type SwipeImagesProps = {
  images: { id: string; name: string; webContentLink: string }[];
  moveImage: (imageId: string, folderId: string) => void;
};

const SwipeImages: React.FC<SwipeImagesProps> = ({ images, moveImage }) => {
  const onSwipe = (direction: string, imageId: string) => {
    if (direction === 'right') {
      moveImage(imageId, 'RIGHT_FOLDER_ID');
    } else if (direction === 'left') {
      moveImage(imageId, 'LEFT_FOLDER_ID');
    }
  };

  return (
    <div className="swipe-container">
      {images.map((image) => {
        return "tinder-card"
      })}
    </div>
  );
};

export default SwipeImages;

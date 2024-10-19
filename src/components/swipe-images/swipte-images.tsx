
import React from 'react';
import TinderCard from 'react-tinder-card';

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
      {images.map((image) => (
        <TinderCard key={image.id} onSwipe={(dir) => onSwipe(dir, image.id)}>
          <div
            style={{ backgroundImage: `url(${image.webContentLink})` }}
            className="swipe-card"
          >
            <h3>{image.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default SwipeImages;

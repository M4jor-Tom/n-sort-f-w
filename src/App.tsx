import React, { useState, useEffect } from 'react';
import GoogleAuth from './auth/google-auth';
import SwipeImages from './components/swipe-images/swipte-images';

declare var gapi: any;

type Image = {
  id: string;
  name: string;
  webContentLink: string;
};

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  const listFiles = async (): Promise<void> => {
    const response = await gapi.client.drive.files.list({
      q: "mimeType contains 'image/'",
      fields: 'files(id, name, webContentLink)',
    });
    setImages(response.result.files);
  };

  useEffect(() => {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance?.isSignedIn.get()) {
      listFiles();
    }
  }, []);

  return (
    <div>
      <GoogleAuth />
      {images.length > 0 && <SwipeImages images={images} moveImage={moveImage} />}
    </div>
  );
};

export default App;
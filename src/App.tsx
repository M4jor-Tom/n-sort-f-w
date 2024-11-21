import React, { useEffect, useState } from "react";
import SwipeImages from "./components/swipe-images/swipte-images";

declare var gapi: any;

type Image = {
  id: string;
  name: string;
  webContentLink: string;
};

const App: React.FC = () => {

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const loadGapi = () => {
      gapi.load("client:auth2", async () => {
        try {
          await gapi.client.init({
            apiKey: "YOUR_API_KEY",
            clientId: "YOUR_CLIENT_ID.apps.googleusercontent.com",
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
            ],
            scope: "https://www.googleapis.com/auth/drive",
          });
          console.log("GAPI initialized");
        } catch (error) {
          console.error("Error initializing GAPI", error);
        }
      });
    };

    if (typeof gapi !== "undefined") {
      loadGapi();
    } else {
      console.error("GAPI not loaded");
    }
  }, []);

  return (
    <div>
      {images.length > 0 && <SwipeImages images={images} moveImage={() => {}} />}
    </div>
  );
};

export default App;

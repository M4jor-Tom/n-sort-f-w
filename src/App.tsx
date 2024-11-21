import React, { useEffect } from "react";

declare var gapi: any;

const App: React.FC = () => {
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

  return <div>Google API Example</div>;
};

export default App;

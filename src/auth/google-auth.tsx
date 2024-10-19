
import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '<YOUR_CLIENT_ID>';
const API_KEY = '<YOUR_API_KEY>';
const SCOPES = 'https://www.googleapis.com/auth/drive';

const GoogleAuth: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const initClient = () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPES,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
    }).then(() => {
      const authInstance = gapi.auth2.getAuthInstance();
      authInstance.isSignedIn.listen(setIsAuthenticated);
      setIsAuthenticated(authInstance.isSignedIn.get());
    });
  };

  useEffect(() => {
    gapi.load('client:auth2', initClient);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>Connected to Google Drive</div>
      ) : (
        <button onClick={handleAuthClick}>Connect to Google Drive</button>
      )}
    </div>
  );
};

export default GoogleAuth;

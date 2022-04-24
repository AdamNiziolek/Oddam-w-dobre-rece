const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const contactAPI = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
export const facebookLink = 'https://www.facebook.com/CodersLabSzkolaIT/';
export const instagramLink = 'https://www.instagram.com/coders.lab';
export default firebaseConfig;

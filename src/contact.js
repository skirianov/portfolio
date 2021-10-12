import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAislziFYb4rczqDr9jMyj7Af3jjlgDtk0",
  authDomain: "portfolio-59c7b.firebaseapp.com",
  databaseURL: "https://portfolio-59c7b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-59c7b",
  storageBucket: "portfolio-59c7b.appspot.com",
  messagingSenderId: "1008650718621",
  appId: "1:1008650718621:web:1c0f38dbc4b72a5eabb374",
  measurementId: "G-LSYZ8XV4MR"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const submitContactForm = (name, email, phone, summary) => {
  set(ref(database, 'contacts/' + email), {
    name,
    email,
    phone,
    summary,
  });
};

submitContactForm('sergii', 'test','222','suka');

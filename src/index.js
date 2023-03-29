

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-QhUuEMFrtMnXLsKx2-QwoZBnnZsxFK4",
  authDomain: "agriladder-ba481.firebaseapp.com",
  projectId: "agriladder-ba481",
  storageBucket: "agriladder-ba481.appspot.com",
  messagingSenderId: "417337660442",
  appId: "1:417337660442:web:b35b17eef43c564ff22da3",
  measurementId: "G-18GXH26E02"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKhoGmV-8-BeXijxbweqW3suhmI4rGMIRk",
  authDomain: "kazadeh-online.firebaseapp.com",
  projectId: "kazadeh-online",
  storageBucket: "kazadeh-online.firebasestorage.app",
  messagingSenderId: "1066989049488",
  appId: "1:1066989049488:web:3dbf308460ebd52c71ea15",
  measurementId: "G-R42LJEJBK5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

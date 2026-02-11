// Importa Firebase
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore } = require('firebase/firestore');

// Configuración de Firebase
const firebaseConfig = {
apiKey: "AIzaSyCTKuW7yt9c9jLytlgRh1pe7tK1q082itc",
authDomain: "studio-4867227967-89229.firebaseapp.com",
projectId: "studio-4867227967-89229",
storageBucket: "studio-4867227967-89229.appspot.com",
messagingSenderId: "508724262293",
appId: "1:508724262293:web:cb74297ded2be7d05329"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén instancias de los servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase ha sido inicializado correctamente.");

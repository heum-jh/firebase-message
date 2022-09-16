// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
let firebaseConfig = {
	apiKey: 'AIzaSyCPAbjsQ_i1j_4BPW2GhFZDdNHAyBWLREA',
	authDomain: 'upbeat-bolt-343006.firebaseapp.com',
	projectId: 'upbeat-bolt-343006',
	storageBucket: 'upbeat-bolt-343006.appspot.com',
	messagingSenderId: '197457722513',
	appId: '1:197457722513:web:3a160f9207237a087cd330',
	measurementId: 'G-EHWM92XLQZ',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage();

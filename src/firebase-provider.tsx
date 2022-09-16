import { useRef, useEffect, useState } from 'react';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getToken, Messaging, getMessaging, onMessage } from 'firebase/messaging';
const firebaseConfig = {
	apiKey: 'AIzaSyCPAbjsQ_i1j_4BPW2GhFZDdNHAyBWLREA',
	authDomain: 'upbeat-bolt-343006.firebaseapp.com',
	projectId: 'upbeat-bolt-343006',
	storageBucket: 'upbeat-bolt-343006.appspot.com',
	messagingSenderId: '197457722513',
	appId: '1:197457722513:web:3a160f9207237a087cd330',
	measurementId: 'G-EHWM92XLQZ',
};
const publicKey = process.env.REACT_FIREBASE_VAPID_KEY;
const FirebaseProvider = () => {
	const appRef = useRef<FirebaseApp | null>(null);
	const messagingRef = useRef<Messaging | null>(null);
	const [token, setToken] = useState('');

	useEffect(() => {
		if (appRef.current === null) return;
		if (messagingRef.current === null) return;
		appRef.current = initializeApp(firebaseConfig);
		messagingRef.current = getMessaging(appRef.current);

		if (Notification.permission !== 'granted') {
			Notification.requestPermission().then((permission) => {
				console.log('1');
				if (permission !== 'granted') {
					throw new Error('Permission denied');
				}
			});
		}
		console.log('test');
		getToken(messagingRef.current, { vapidKey: publicKey }).then((currentToken) => {
			console.log(currentToken);
			setToken(currentToken);
		});
		const onforegroundMessage = () => {
			if (messagingRef.current === null) return;
			onMessage(messagingRef.current, (payload) => {
				console.log('Message received. ', payload);
			});
		};
		return () => {
			onforegroundMessage();
		};
	}, []);

	return <>{token}</>;
};

export { FirebaseProvider };

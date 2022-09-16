import React from 'react';
import { FirebaseProvider } from './firebase-provider';

function App() {
	return (
		<>
			<FirebaseProvider />
			<div className="App">
				<h1>FireBase Message Test</h1>
			</div>
		</>
	);
}

export default App;

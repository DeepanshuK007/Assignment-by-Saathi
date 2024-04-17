import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBFAU8t598MaIWG4P50liYTJ8IJSeM2nrM',
	authDomain: 'saathi-app-008.firebaseapp.com',
	projectId: 'saathi-app-008',
	storageBucket: 'saathi-app-008.appspot.com',
	messagingSenderId: '94039824377',
	appId: '1:94039824377:web:a46ab2656e05e3b7b08f28',
	measurementId: 'G-N5RNTWGYV1'
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };

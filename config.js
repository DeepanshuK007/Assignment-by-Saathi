import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBFA*********P50liYTJ8IJSeM2nrM',
	authDomain: 'saathi-**********ebaseapp.com',
	projectId: '*******',
	storageBucket: 'saathi-*******8.appspot.com',
	messagingSenderId: '9403***4377',
	appId: '1:94039824377:web:a46ab26*******8f28',
	measurementId: '*******WGYV1'
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };

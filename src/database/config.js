import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyC_Uq2LAMqbRlQm6Jb1hwTnq2XNft9IC6s',
  authDomain: 'photowall-d9668.firebaseapp.com',
  databaseURL: 'https://photowall-d9668.firebaseio.com',
  projectId: 'photowall-d9668',
  storageBucket: 'photowall-d9668.appspot.com',
  messagingSenderId: '1019499229607',
  appId: '1:1019499229607:web:1db2e147ad6551d10f0682',
  measurementId: 'G-1NBF1C996T',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };

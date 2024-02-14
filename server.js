import express from 'express';
import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD_oRuT736jldH2fzCi5SeT-D_-ddNaCWA',
  authDomain: 'sial-firebase.firebaseapp.com',
  projectId: 'sial-firebase',
  storageBucket: 'sial-firebase.appspot.com',
  messagingSenderId: '536747596574',
  appId: '1:536747596574:web:47bcf433beaab320e7870f',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Initialize Express
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get('/data', async (req, res) => {
  const dataCollection = collection(db, 'test');
  const dataSnapshot = await getDocs(dataCollection);
  const dataList = dataSnapshot.docs.map((doc) => doc.data());
  res.json(dataList);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

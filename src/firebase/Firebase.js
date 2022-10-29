import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDZgUQMcVtTEkEtrZa72eGSj72VZBAu7iY',
  authDomain: 'proyecto-coder-606ab.firebaseapp.com',
  projectId: 'proyecto-coder-606ab',
  storageBucket: 'proyecto-coder-606ab.appspot.com',
  messagingSenderId: '286964972044',
  appId: '1:286964972044:web:c5727714bc303236168c29',
}

const app = initializeApp(firebaseConfig)
export const dataBase = getFirestore(app)

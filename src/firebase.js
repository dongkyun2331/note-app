import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB20dmxGDGfJ7EFSjojp2Ci20A3ImFNz6A',
  authDomain: 'note-app-9bbb6.firebaseapp.com',
  projectId: 'note-app-9bbb6',
  storageBucket: 'note-app-9bbb6.appspot.com',
  messagingSenderId: '995784422247',
  appId: '1:995784422247:web:703fe0dbc832143c1bb5c2',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

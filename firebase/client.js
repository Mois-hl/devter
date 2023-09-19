import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWCUe1pB7pSqDavYrje3JPOSlnVGDD6wY',
  authDomain: 'devter-89afc.firebaseapp.com',
  projectId: 'devter-89afc',
  storageBucket: 'devter-89afc.appspot.com',
  messagingSenderId: '732789924107',
  appId: '1:732789924107:web:1eba5e10cea0676857420e',
  measurementId: 'G-E8ERRQSQMR'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)

// Github's provider
const provider = new GithubAuthProvider()

// sign up with email and password
export function singUp (email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

// log in with email and password
export function loginWithEmail (email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}
// log out
export function logOut () {
  return signOut(auth)
}

// Custom Hook for onAuthStateChanged
export function useAuth () {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])
  return currentUser
}

// Login with GitHub
export const loginWithGitHub = () => {
  return signInWithPopup(auth, provider)
  // const {photoUrl, screenName, email} = userInfo.user.reloadUserInfo;
  // return {
  //  avatar: photoUrl,
  //  userName: screenName,
  //  email: email
  // }
}
// an insert to database
export const addDevit = ({ avatar, userName, userId, content }) => {
  return addDoc(collection(db, 'devits'), {
    avatar,
    userName,
    userId,
    content,
    createdAt: serverTimestamp(),
    likesCount: 0,
    sharedcount: 0
  })
}

// Custom Hook for getDocs from the database
export function useTimeline () {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    getDocs(collection(db, 'devits'))
      .then(snapshot => {
        const lists = snapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data()
        }))
        setTimeline(lists)
      })
  }, [])

  return timeline
}

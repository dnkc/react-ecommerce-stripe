import firebase from "firebase";
import "firebase/firestore"; // for the database
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAUq8TE0F2Cj442X-MXnOfWahnN0h1CkoM",
  authDomain: "stripe-masterclass.firebaseapp.com",
  projectId: "stripe-masterclass",
  storageBucket: "stripe-masterclass.appspot.com",
  messagingSenderId: "130136402349",
  appId: "1:130136402349:web:c07d70bfaf50b64290d924",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
// auth needed for signing up, signing in, signing out
const auth = firebase.auth();
// additionalData is optional
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // snapshot given by firestore when you write to it
  // gives an exists variable
  // if exists variable is there, that document already has data in it
  // if it does not exist, it does not exist in collection
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export { firestore, createUserProfileDocument, auth };

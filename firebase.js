import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyDVwGSO3DTlEPJnqic2UBOLO0s1Y89m-nY",
        authDomain: "react-ecommerce-aa.firebaseapp.com",
        projectId: "react-ecommerce-aa",
        storageBucket: "react-ecommerce-aa.appspot.com",
        messagingSenderId: "253277487785",
        appId: "1:253277487785:web:8cf0319b63d00b64c11fb8",
        measurementId: "G-WH8JEEXM4D"
      }
)

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)

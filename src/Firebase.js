import firebase from 'firebase/app'
import 'firebase/auth'
const app=firebase.initializeApp(
    {
       
            apiKey: "AIzaSyCFgaq0nyuTmAAjvQ-BpvBa4lXyAvsa6hc",
            authDomain: "auth-development-f9564.firebaseapp.com",
            projectId: "auth-development-f9564",
            storageBucket: "auth-development-f9564.appspot.com",
            messagingSenderId: "361466978345",
            appId: "1:361466978345:web:6c97788bd4fae9a6183c38"
         
    }
)
export const auth=app.auth()
export default app;
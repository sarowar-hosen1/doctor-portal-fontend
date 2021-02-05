import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../../App"
import { useHistory, useLocation } from "react-router-dom";

if (firebase.app.length) {
    firebase.initializeApp(firebaseConfig)

}


export const Auth = () => {
    const history = useHistory();
    const location = useLocation()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { from } = location.state || { from: { pathname: "/" } };

    // Sing up with email and password
    const signUp = (email, password, name) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        const { displayName, email } = res.user;
                        const signInUser = { name: displayName, email }
                        setLoggedInUser(signInUser)
                        sessionStorage.setItem('user', signInUser.name)
                        sessionStorage.setItem('userEmail', signInUser.email)
                        getToken()
                        history.replace(from)
                    })
            })
            .catch(err => {

                setLoggedInUser({ error: err.message })
            })
    }

    //Sign in with email and password
    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                const { displayName, email } = res.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser)
                sessionStorage.setItem('user', signInUser.name)
                sessionStorage.setItem('userEmail', signInUser.email)
                getToken()
                history.replace(from)
            })
            .catch(err => {
                setLoggedInUser({ error: err.message })
            })
    }

    //Get token idToken
    const getToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then((idToken) => {
                sessionStorage.setItem('token', idToken)
            })
            .catch(err => {
                console.log(err);
            })
    }

    //sgin out

    const signOut = () => {
        firebase.auth().signOut()
        .then(() => {
            setLoggedInUser({});
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('userEmail')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return {
        signUp,
        signIn,
        signOut,
    }
}
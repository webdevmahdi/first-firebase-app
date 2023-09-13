import { useState } from 'react';
import './App.css';
import app from './firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';



const auth = getAuth(app);

function App() {
  let [user, setUser] = useState({});

  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider();

  let signInPopUp = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        let user = result.user;
        setUser(user);
        console.log(result);
      })
      .catch(error => console.error('error', error));
  }

  let githubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
      let user = result.user;
      setUser(user)
      console.log(result)
    })
    .catch(error => console.error(error));
  }

  let signOutAccount = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch(error => setUser({}));
  }

  return (
    <div>
      {
        user.displayName ?  <button onClick={signOutAccount}>Sign out</button> : 
        <div>
          <button onClick={signInPopUp}>Google sign in</button>
          <button onClick={githubSignIn}>Github sign in</button>
        </div>
          
      }
          <div>
            <img src={user.photoURL} />
            <h1>Name: {user.displayName}</h1>
            <h3>Email: {user.email}</h3>
          </div>
    </div>
  )
}

export default App

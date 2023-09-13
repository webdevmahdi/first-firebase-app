import { useState } from 'react';
import './App.css';
import app from './firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';



const auth = getAuth(app);

function App() {
  let [user, setUser] = useState({});

  let provider = new GoogleAuthProvider();

  let signInPopUp = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        let user = result.user;
        setUser(user);
        console.log(result);
      })
      .catch(error => console.error('error', error));
  }

  let signOutAccount = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch(error => setUser({}));
  }

  return (
    <div>
      {
        user.email ?  <button onClick={signOutAccount}>Sign out</button> : <button onClick={signInPopUp}>Google sign in</button>
          
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

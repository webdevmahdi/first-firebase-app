import './App.css';
import app from './firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';



const auth = getAuth(app);

function App() {
  let provider = new GoogleAuthProvider();
  let signInPopUp = () =>{
    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result);
    })
    .catch(error => console.error('error', error));
  }

  return (
    <div>
      <button onClick={signInPopUp}>Google sign in</button>
    </div>
  )
}

export default App

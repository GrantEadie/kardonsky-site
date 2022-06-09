import {
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../../firebase";
import "./login.css";

function Login() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        console.log("SIGNED OUT");
      }
    });
  }, [user, setUser]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setUser("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="login-backdrop">
      <div id="login-holder">
        <div id="login">
          <div id="login-header">Admin Account Access</div>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {user ? (
            <>
              <button onClick={() => handleLogout()}>Logout</button>
              <span id="logged-in">you are currently logged in.</span>
            </>
          ) : (
            <>
              <button onClick={() => handleLogin()}>Login</button>
              <span id="logged-out">you are currently logged out.</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

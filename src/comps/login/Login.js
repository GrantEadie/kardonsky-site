import {
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../../firebase";
import "./login.css";
import { Lock, LockOpen } from "phosphor-react";

function Login({ user, setUser, handleLogout }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("successful login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div id="login-backdrop">
      <div id="login-holder">
        <div id="login">
          {user ? (
            <>
              <LockOpen size={32} weight="fill" />
              <div id="login-header">
                Valerie Kardonsky <span>Admin Account Access</span>
              </div>
              <button onClick={() => handleLogout()}>Logout</button>
              <span id="logged-in">you are currently logged in.</span>
            </>
          ) : (
            <>
              <Lock size={32} weight="fill" />
              <div id="login-header">
                Valerie Kardonsky <span>Admin Account Access</span>
              </div>
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

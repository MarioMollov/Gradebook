import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { siteTitle } from "../../constants";
import Button from "../../components/Button";
import GoogleGLogo from "../../static/GoogleGLogo.svg";
import classes from "./auth.module.scss";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChnage = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChnage = (event) => {
    setPassword(event.target.value);
  };

  const googleSignInHandler = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const singInHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={classes.signInForm}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={onEmailChnage} value={email} />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={onPasswordChnage}
          value={password}
        />
        <Button onClick={singInHandler} className={classes.register}>
          Register
        </Button>
        <div className={classes.divider}>Or</div>
        <Button onClick={googleSignInHandler} className={classes.google}>
          <Image alt="Google G logo" src={GoogleGLogo} />
          Continue with Google
        </Button>
      </div>
    </>
  );
};

export default Auth;

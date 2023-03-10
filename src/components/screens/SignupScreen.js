import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
import { useHistory } from "react-router-dom";

function SignupScreen() {
    let history = useHistory();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authuser) => {
                console.log(authuser);
            })
            .catch((error) => {});
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authuser) => {
                console.log(authuser);
            })
            .catch((error) => {});
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    placeholder="Email"
                    type="email"
                    id="email_input"
                />
                <input
                    ref={passwordRef}
                    placeholder="Password"
                    type="password"
                    id="password_input"
                />
                <button type="submit" id="signup_button">
                    Sign In
                </button>
                <h4>
                    <span
                        className="signupScreen_gray"
                        data-cy="new_to_netflix"
                    >
                        New to Netflix?{" "}
                    </span>
                    <span className="signupScreen_link">Sign Up Now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;

import React, { useState } from "react";
import "./login.css";
import Registration from "./registration";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showRegistration, setShowRegistration] = useState(false); // State to control the view

    const handleRegistrationClick = () => {
        setShowRegistration(true); // Switch to the Login view when button is clicked
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="col">
            {showRegistration ? (
                <Registration />
            ) : (
                <>
                    <img id="LOGO" src="LOGO.jpg" alt="Logo" />
                    <p className="p1">Username:</p>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter Username"
                        className="inp1"
                    />
                    <p className="p2">Password:</p>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter Password"
                        className="inp2"
                    />
                    <button className="enter_button">Enter</button>
                    <p className="p3">Don't have an account? </p>
                    <button className="register_button" onClick={handleRegistrationClick}>Register here!</button>
                </>
            )}
        </div>
    );
}
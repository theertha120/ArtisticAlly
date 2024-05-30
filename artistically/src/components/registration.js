import React, { useState } from "react";
import "./registration.css";

export default function Registration() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= 8) {
            setInputValue(value);
            setErrorMessage("");
        } else if (value.length > 8) {
            setErrorMessage("Max of 8 numbers only");
        }
    };

    const [inputEmail, setEmailValue] = useState("");
    const [errorMesage, setErrorMesage] = useState("");
    const handleChange3 = (e) => {
        const value = e.target.value;
        setEmailValue(value);
        if (value === "") {
            setErrorMessage("");
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setEmailValue(value);
            setErrorMesage("");
        } else {
            setErrorMesage("Enter in email format");
        }
    };

    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [errorMess, setErrorMess] = useState("");

    const handleChange2 = (e) => {
        const { id, value } = e.target;

        if (id === "password") {
            setPassword(value);
            if (verifyPassword !== "" && value !== verifyPassword) {
                setErrorMess("Passwords do not match");
            } else {
                setErrorMess("");
            }
        } else if (id === "verifyPassword") {
            setVerifyPassword(value);
            if (value === "" && password !== "") {
                setErrorMess("");
            } else if (password !== "" && value !== password) {
                setErrorMess("Passwords do not match");
            } else {
                setErrorMess("");
            }
        }
    };

    return (
        <>
            <div className="form-container">
                <form>
                    <h1>Registration Page</h1>
                    <div className="form-el">
                        <label className="label">First Name:</label>
                        <input type="text" className="input" />
                    </div>
                    <br />
                    <div className="form-el">
                        <label className="label">Last Name:</label>
                        <input type="text" className="input" />
                    </div>
                    <br />
                    <div className="form-el">
                        <label className="label">Email ID:</label>
                        <input
                            className="input"
                            type="text"
                            value={inputEmail}
                            onChange={handleChange3}
                            placeholder="Enter email"
                        />
                        {inputEmail !== "" && errorMesage && (
                            <div style={{ color: "red" }}>{errorMesage}</div>
                        )}
                    </div>
                    <br />
                    <div className="form-el">
                        <label className="label">Phone Number:</label>
                        <input
                            className="input"
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Enter up to 8 numbers"
                        />
                        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                    </div>
                    <br />
                    <div className="form-el">
                        <label className="label">Date of Birth:</label>
                        <input
                            className="date"
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <br />
                    <div className="form-el">
                        <label className="label">Password:</label>
                        <input
                            className="input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handleChange2}
                        />
                    </div>
                    <br />
                    <div className="form-el">
                        <label className="label">Verify password:</label>
                        <input
                            className="input"
                            type="password"
                            id="verifyPassword"
                            value={verifyPassword}
                            onChange={handleChange2}
                        />
                        {errorMess && <div style={{ color: "red" }}>{errorMess}</div>}
                    </div>
                    <br /> <br />
                    <div>
                        <button className="button">Submit</button>
                        <br /> <br />
                    </div>
                </form>
            </div>
        </>
    );
};

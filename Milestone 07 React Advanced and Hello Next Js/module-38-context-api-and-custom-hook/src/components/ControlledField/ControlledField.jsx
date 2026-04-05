import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        console.log("submitted");
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
        }
        else {
            setError("");
        }
    }

    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' required />
                <br />
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} defaultValue={password} placeholder='Password' required />
                <br />
                <input type="submit" value="Submit now" />
            </form>

            <p style={{ color: "red" }}>{error}</p>
        </div>
    );
};

export default ControlledField;
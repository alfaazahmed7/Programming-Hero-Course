import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");
    const [password, passwordOnChange] = useInputField("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" />
                <br />
                <input type="email" onChange={emailOnChange} />
                <br />
                <input type="password" onChange={passwordOnChange} />
                <br />
                <input type="submit" value="Submit Now" />
            </form>
        </div>
    );
};

export default HookForm;
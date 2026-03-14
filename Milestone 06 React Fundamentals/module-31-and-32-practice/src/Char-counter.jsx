// Task 2 — Live Character Counter

import { useState } from "react";

export default function CharCounter() {
    // state to store the input value
    const [text, setText] = useState("");

    // handler that updates the state when input changes
    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div style={{
            border: "2px solid red",
            padding: "10px",
            width: "90%",
            margin: "0 auto",
            borderRadius: "20px",
            marginTop: "20px"
        }}>
            <h1 style={{ color: "green" }}>Live Character Counter</h1>
            <h4>Total Characters: {text.length}</h4>

            <input style={{
                width: "40%",
                height: "30px",
                background: "white",
                borderRadius: "15px",
                border: "none",
                color: "black",
                paddingLeft: "5px"
            }}
                type="text"
                placeholder="Write Something"
                value= {text} //bind the state to the input
                onChange={handleChange} // update state on every keystroke
            />
        </div>
    );
}
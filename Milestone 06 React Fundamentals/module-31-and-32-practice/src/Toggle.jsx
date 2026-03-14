import { useState } from "react"

export default function Toggle() {
    const [show, showText] = useState(false);

    function toggleBtn() {
        showText(!show);
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
            <h1>Toggle Button</h1>
            <button onClick={toggleBtn}>
                {show ? "Hide Text" : "Show Text"}
            </button>
            {show && <p>Hey there! What's Up?</p>}
        </div>
    );
}
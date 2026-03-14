// Task 1 — Simple Counter

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function increaseHandler() {
        const newCount = count + 1;
        setCount(newCount);
    }

    function decreaseHandler() {
        const newCount = count - 1;
        setCount(newCount);
    }

    function resetHandler() {
        setCount(0);
    }
    return (
        <div style={{border: "2px solid red", padding: "10px", width: "90%", margin: "0 auto", borderRadius: "20px"}}>
            <h1 style={{ color: "green", }}>Counter Machine</h1>
            <h4>Count {count}</h4>
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={decreaseHandler}>Decrease</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
}
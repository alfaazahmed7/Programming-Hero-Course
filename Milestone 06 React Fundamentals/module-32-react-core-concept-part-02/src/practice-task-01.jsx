import { useState } from "react"

export default function Counters() {
    const [count, setCount] = useState(0);

    const countAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const countSubtract = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    const countReset = () => {
        setCount(0);
    }

    const countersStyle = {
        border: "2px solid green",
        borderRadius: "20px",
        padding: "10px"
    }

    return (
        <div style={countersStyle}>
            <h2>Count: {count}</h2>
            <button onClick={countAdd}>Increase</button>
            <button onClick={countSubtract}>Decrease</button>
            <button onClick={countReset}>Reset</button>
        </div>
    );
}
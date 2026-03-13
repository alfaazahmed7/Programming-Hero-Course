import { useState } from "react";

export default function ShowHideText() {
    // step 01 - create state to track visibility
    const [isVisible, setIsVisible] = useState(false);

    // step 02 - function to toggle visibility
    const toggleText = () => {
        setIsVisible(prev => !prev);
        // • prev → the previous state value (current value of isVisible)
        // • !prev → negates it (true → false, false → true)
    }

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            {/* step 03 - button to toggle text */}
            <button onClick={toggleText}>
                {isVisible ? "Hide" : "Show"}
            </button>

            {/* step 04 - conditionally render text */}
            {isVisible && <p>Hello, React Learner!</p>}
        </div>
    );
}
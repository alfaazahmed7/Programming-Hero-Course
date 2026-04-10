'use client'
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>Count: {count}</h4>
            <button
                onClick={() => setCount(count + 1)}
            >Increment</button>
        </div>
    );
};

export default Counter;
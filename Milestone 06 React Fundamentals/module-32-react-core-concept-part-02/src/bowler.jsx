import { useState } from "react";

export default function Bowler() {
    const [wickets, setWickets] = useState(0);
    const [wides, setWides] = useState(0);
    const [NoBalls, setNoBalls] = useState(0);

    const handleWicket = () => {
        const updatedWicket = wickets + 1;
        setWickets(updatedWicket);
    }

    const handleWides = () => {
        const updatedWides = wides + 1;
        setWides(updatedWides);
    }

    const handleNoBalls = () => {
        const updatedNoBalls = NoBalls + 1;
        setNoBalls(updatedNoBalls);
    }

    return (
        <div>
            <h2>Bowler: Mitchel Starc</h2>
            <p><small>Wides: {wides}</small></p>
            <p><small>No Balls: {NoBalls}</small></p>
            <h1>Wicket: {wickets}</h1>
            <button onClick={handleWicket}>Wicket</button>
            <button onClick={handleWides}>Wide</button>
            <button onClick={handleNoBalls}>No Ball</button>
        </div>
    )
}
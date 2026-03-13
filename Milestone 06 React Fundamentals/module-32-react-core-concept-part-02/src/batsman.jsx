import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updatedRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            <p><small>Fours: {fours}</small></p>

            {
                runs >= 50 && <p>Congratulation you have scored 50 runs</p>
            }

            {
                runs >= 100 && <p>Congratulation you have scored 100 runs</p>
            }

            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
}
import { useRef } from 'react';
import './Animate.css';

const Train = () => {
    const trainRef = useRef(null);

    const moveTrain = (direction) => {
        if (trainRef.current) {
            trainRef.current.classList.remove("move-left", "move-right", "move-up", "move-down");
            trainRef.current.classList.add(direction);
        }
    };

    return (
        <>
            <div className="scene">
                <div className="track"></div>
                <div ref={trainRef} className="train">🚆</div>
            </div>
            <div className="controls">
                <button onClick={() => moveTrain("move-up")} className="button">Move Up</button>
                <button onClick={() => moveTrain("move-right")} className="button">Move Right</button>
                <button onClick={() => moveTrain("move-down")} className="button">Move Down</button>
                <button onClick={() => moveTrain("move-left")} className="button">Move Left</button>
            </div>
        </>
    );
};

export default Train;
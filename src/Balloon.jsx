import { useRef } from "react";
import "./Balloon.css";

const Balloon = () => {
    const balloonRef = useRef(null);

    // Function to move the balloon manually
    const moveBalloon = (direction) => {
        if (balloonRef.current) {
            balloonRef.current.classList.remove("move-left", "move-right", "move-up", "move-down");
            balloonRef.current.classList.add(direction);
        }
    };

    return (
        <div className="sky">
            {/* Clouds using Emojis */}
            {/* <div className="clouds">
                <span className="cloud cloud1">☁️</span>
                <span className="cloud cloud2">☁️</span>
                <span className="cloud cloud3">☁️</span>
            </div> */}

            {/* Balloon */}
            <div className="balloon-wrapper">
                <div ref={balloonRef} className="balloon">🎈</div>
            </div>

            {/* Controls */}
            <div className="controls">
                <button onClick={() => moveBalloon("move-left")}>Left</button>
                <button onClick={() => moveBalloon("move-right")}>Right</button>
                <button onClick={() => moveBalloon("move-up")}>Up</button>
                <button onClick={() => moveBalloon("move-down")}>Down</button>
            </div>

            {/* Mountains */}
            <div className="mountains"></div>
        </div>
    );
};

export default Balloon;

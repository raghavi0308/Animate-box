import { useRef } from 'react';
import './Animate.css';

const Animate = () => {
    const boxRef = useRef(null);

    const animatemoveR = () => {
        if (boxRef.current) {
            boxRef.current.classList.toggle('moveR');
        }
    };
    
    const animatemoveT = () => {
        if (boxRef.current) {
            boxRef.current.classList.toggle('moveT');
        }
    };
    
    const animatemoveD = () => {
        if (boxRef.current) {
            boxRef.current.classList.toggle('moveD');
        }
    };
    
    const animatemoveL = () => {
        if (boxRef.current) {
            boxRef.current.classList.toggle('moveL');
        }
    };

    return (
        <>
            <div className='container'>
                <div ref={boxRef} className="box"></div>
            </div>
            <div>
                <button onClick={animatemoveR} className="button">Move R</button>
            
                <button onClick={animatemoveT} className="button1">Move T</button>
            
                <button onClick={animatemoveD} className="button2">Move D</button>

                <button onClick={animatemoveL} className="button2">Move L</button>
            </div>

        </>
    );
};

export default Animate;

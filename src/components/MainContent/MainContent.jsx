import React, {  useRef, useEffect,useState } from 'react'
import './MainContentStyle.css'

const MainContent = () => {
  const canvasRef = useRef(null);
  const [progressStartValue, setProgressStartValue] = useState(0);
  const progressEndValue = 90;
  const speed = 100;

  useEffect(() => {
    const progress = setInterval(() => {
      setProgressStartValue((prevValue) => prevValue + 1);
    }, speed);

    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }



    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 8;

    const centerX = window.innerWidth / 2; // Center of the screen
    const startX = centerX - window.innerWidth * 0.5; // 40vw to the left of the center
    const endX = centerX + window.innerWidth * 0.5; // 40vw to the right of the center

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(startX, 90); // Starting point (x, y)
    ctx.lineTo(endX, -100); // Ending point (x, y)
    ctx.stroke(); // Render the line

    // Draw another line
    ctx.beginPath();
    ctx.moveTo(startX, 130); // Starting point (x, y)
    ctx.lineTo(endX, 325); // Ending point (x, y)
    ctx.stroke(); // Render the line

    return () => clearInterval(progress);
  }, [progressStartValue, progressEndValue]);


  return (
    <div className='Main-Content-main-div'>
      <div className='Main-Content-sub-div'>
      <div className='Main-Content-Central-Display'>
        <div className='Percent-Calc-main-div' style={{background: `conic-gradient(#FFD700 ${progressStartValue*3.6}deg , #000000 0deg)`}}><span>{progressStartValue}%</span></div>
        {/* <div>Central Display</div> */}
      </div>
      <canvas ref={canvasRef} width={window.innerWidth/3} height={200} />
      </div>
    </div>
  )
}

export default MainContent
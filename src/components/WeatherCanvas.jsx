import { useEffect, useRef } from 'react';

export default function WeatherCanvas({ condition }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Canvas drawing based on weather condition
    if (condition === 'Clear') {
      // Draw a sun
      ctx.beginPath();
      ctx.arc(150, 75, 30, 0, Math.PI * 2);
      ctx.fillStyle = 'gold';
      ctx.fill();
    } else if (condition === 'Clouds') {
      // Draw clouds
      ctx.fillStyle = '#ccc';
      ctx.beginPath();
      ctx.ellipse(130, 80, 40, 25, 0, 0, Math.PI * 2);
      ctx.ellipse(160, 80, 35, 20, 0, 0, Math.PI * 2);
      ctx.ellipse(145, 70, 30, 20, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (condition === 'Rain') {
      // Draw rain drops
      ctx.fillStyle = 'blue';
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * 300;
        const y = Math.random() * 100 + 50;
        ctx.fillRect(x, y, 2, 10);
      }
    } else if (condition === 'Snow') {
      // Draw snow flakes
      ctx.fillStyle = 'white';
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * 300;
        const y = Math.random() * 120;
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (condition === 'Thunderstorm') {
      // Draw a lightning bolt (⚡)
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(150, 50);
      ctx.lineTo(130, 90);
      ctx.lineTo(160, 90);
      ctx.lineTo(140, 130);
      ctx.stroke();
    } else {
      // Default fallback
      ctx.fillStyle = 'gray';
      ctx.font = '16px sans-serif';
      ctx.fillText('Weather not visualized', 80, 80);
    }
  }, [condition]);

  return <canvas ref={canvasRef} width="300" height="150" />;
}

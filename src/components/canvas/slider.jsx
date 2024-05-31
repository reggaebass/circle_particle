import React, {useEffect, useRef, useState } from 'react';
import Slider from '@mui/material/Slider';
import './slider.css';



export const ControledCircle = props => {
    const canvasRef = useRef(null);
    const [size, setSize] = useState(30);
    const draw = (ctx) =>{
        ctx.clearRect( 0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(550, 150, size, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
    }
    const handleChange = (event, newValue) => {
        setSize(newValue);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext('2d');
   
        draw(context);  

    }, [draw]);

    return (
        <div className='background'>
            <canvas ref={canvasRef} {...props}/>
            <div className='slider'>
            <Slider 
            aria-label="Size" 
            value={size} 
            onChange={handleChange} 
            min={10}
            max={110}
            />
            </div>
            
        </div>
    );
};

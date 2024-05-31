import React, {useEffect, useRef, useState } from 'react';
import Slider from '@mui/material/Slider';
import './slider.css';



export const ControledCircle = props => {
    const canvasRef = useRef(null);
    const [size, setSize] = useState(30);
    const draw = (ctx) =>{
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(100, 100, size, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();;
    }
    const handleChange = (event, newValue) => {
        setSize(newValue);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
   
        draw(context);  

    }, [draw]);

    return (
        <div className='background'>
            <canvas ref={canvasRef} {...props}/>
            <div className='slider'>
            <Slider aria-label="Size" value={size} onChange={handleChange}/>
            </div>
            
        </div>
    );
};

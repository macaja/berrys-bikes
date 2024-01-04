import React, { useRef, useState } from 'react';
import { Button, Container } from '@mui/material';

const SignaturePad: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);

    const startDrawing = (
        e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    ) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx && canvas) {
            const clientX = 'clientX' in e ? e.clientX : e.touches && e.touches[0]?.clientX;
            const clientY = 'clientY' in e ? e.clientY : e.touches && e.touches[0]?.clientY;
            ctx.beginPath();
            ctx.moveTo(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
        }
    };

    const endDrawing = () => {
        setIsDrawing(false);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx && canvas) {
            const clientX = 'clientX' in e ? e.clientX : e.touches && e.touches[0]?.clientX;
            const clientY = 'clientY' in e ? e.clientY : e.touches && e.touches[0]?.clientY;
            ctx.lineTo(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
            ctx.stroke();
        }
    };

    return (
        <Container>
            <canvas
                ref={canvasRef}
                width={400}
                height={200}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                onTouchStart={startDrawing}
                onTouchEnd={endDrawing}
                onTouchMove={draw}
                style={{ border: '1px solid #ccc' }} // Add some styling
            />
            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
                onClick={endDrawing}
            >
                Clear Signature
            </Button>
        </Container>
    );
};

export default SignaturePad;

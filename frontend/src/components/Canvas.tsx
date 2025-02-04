import { useRef, useEffect } from 'react';

type CanvasContext = CanvasRenderingContext2D | null;

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx: CanvasContext = canvas.getContext('2d');

            if (ctx) {
                canvas.width = 800;
                canvas.height = 600;

                ctx.font = '30px Arial';
                ctx.fillStyle = 'black';
                ctx.fillText('Hello world!', 150, 300);
            }
        }
    }, []);

    return (
        <>
            <canvas ref={canvasRef}/>
        </>
    )
}

export default Canvas

import React from "react"
import { ReactP5Wrapper } from "react-p5-wrapper";

type PropTypes = {
    backgroundColor: string;
}
const FractalTree: React.FC<PropTypes> = ({ backgroundColor }) => {
    function sketch(p: any) {
        let angle = 0;

        p.setup = () => {
            p.createCanvas(325, 325);
            p.angleMode(p.RADIANS);
            p.noFill();
        };

        p.draw = () => {
            p.background(backgroundColor);
            p.translate(p.width / 2, p.height);

            // Animate angle over time to spiral
            angle = p.map(p.sin(p.frameCount * 0.02), -1, 1, p.PI / 10, p.PI / 2);

            drawBranch(100, 0); // start recursive draw
        };

        function drawBranch(len: number, depth: number) {
            // Dynamic color: shift from purple to cyan as it recurses
            const hue = p.map(depth, 0, 10, 280, 180); // purple to aqua
            p.stroke(`hsl(${hue}, 100%, 70%)`);
            p.line(0, 0, 0, -len);
            p.translate(0, -len);

            if (len > 5) {
                p.push();
                p.rotate(angle + depth * 0.02); // spiral right branch slightly
                drawBranch(len * 0.67, depth + 1);
                p.pop();

                p.push();
                p.rotate(-angle - depth * 0.02); // spiral left branch slightly
                drawBranch(len * 0.67, depth + 1);
                p.pop();
            }
        }
    }

    return <ReactP5Wrapper sketch={sketch} />;
}

export default FractalTree
// This component renders a simple fractal tree using SVG.  
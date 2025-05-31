import React from "react"

const FractalTree: React.FC =() => {
    return (
        <div className="fractal-tree">
            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="black" strokeWidth="0.5">
                    <line x1="50" y1="100" x2="50" y2="80" />
                    <line x1="50" y1="80" x2="40" y2="70" />
                    <line x1="50" y1="80" x2="60" y2="70" />
                    <line x1="40" y1="70" x2="30" y2="60" />
                    <line x1="60" y1="70" x2="70" y2="60" />
                </g>
            </svg>
        </div>
    )
}
export default FractalTree
// This component renders a simple fractal tree using SVG.  
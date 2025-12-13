import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Gsap() {
    const boxRef = useRef(null); // reference to the DOM element

    useEffect(() => {
        // Simple GSAP animation
        gsap.to(boxRef.current, {
            x: 500,             // move 300px to the right
            rotation: 360,      // full rotation
            scale: 1.5,         // increase size
            duration: 2,        // 2 seconds
            ease: "power2.inOut"
        });
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div
                ref={boxRef}
                className="w-24 h-24 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white text-lg font-bold"
            >
                GSAP 🚀
            </div>
        </div>
    );
}

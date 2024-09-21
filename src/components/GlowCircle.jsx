import React, { useEffect, useRef } from 'react';

const GlowCircle = () => {
    const glowCircleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const glowCircle = glowCircleRef.current;
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const scrollX = window.scrollX;
            const scrollY = window.scrollY;

            const circleX = mouseX + scrollX - glowCircle.clientWidth / 2;
            const circleY = mouseY + scrollY - glowCircle.clientHeight / 2;

            glowCircle.style.top = `${circleY}px`;
            glowCircle.style.left = `${circleX}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="glow-circle" ref={glowCircleRef}></div>;
};

export default GlowCircle;

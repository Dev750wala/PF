import React, { useEffect, useState } from 'react';


const StickyTopBar = ({ id, textToBeInDiv }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const scrollPosition = window.scrollY;

                // Check if the scroll position is within the bounds of the section
                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [id]);

    return (
        <div
            className={`fixed top-0 w-full bg-gray-800 text-white text-center p-2 transition-all duration-300 z-50 ${isSticky ? 'block' : 'hidden'
                }`}
        >
            <p>{textToBeInDiv}</p>
        </div>
    );
};


export default StickyTopBar;

"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import scrollPic from "../../../../public/scroll-removebg-preview.png";

const SCROLL_THRESHOLD = 50; 

const ScrollSection: React.FC = () => {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        if (!isMounted) return;

        const handleScroll = () => {
            if (window.scrollY > SCROLL_THRESHOLD && !isFadingOut) {
                setIsFadingOut(true); 
                setTimeout(() => {
                    setIsMounted(false);
                }, 500);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMounted, isFadingOut]);
    if (!isMounted) {
        return null;
    }
    return (
        <section 
            className={`scroll-section-container ${isFadingOut ? 'fading-out' : ''}`}
        >
            <h2>Scroll Down</h2>
            <Image
                src={scrollPic}
                alt="Scroll down"
                width={90}
                height={100}
            />
        </section>
    );
};

export default ScrollSection;
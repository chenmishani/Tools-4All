import React, { useEffect, useRef } from 'react';
import './Title.css';

const Title = ({ text }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        title.style.fontSize = '5px';
        setTimeout(() => {
            title.style.transition = 'font-size 0.5s ease-in-out';
            title.style.fontSize = '60px';
        }, 100);
    }, []);

    return <h1 ref={titleRef} className="title">{text}</h1>;
};

export default Title;

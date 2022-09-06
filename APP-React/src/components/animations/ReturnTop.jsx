import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsFillArrowUpSquareFill } from "react-icons/bs";


const ReturnTop = () => {

    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    useEffect(() => {
        window.scrollTo(({ top: 0, left: 0, behavior: "smooth" }))
    }, []);

    return (
        <div className={"returnTop-container " + (scrollY >= 99 ? "show" : "")}>
            <button className="returnTop" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}><BsFillArrowUpSquareFill size={35} /></button>
        </div>
    );
};

export default ReturnTop;
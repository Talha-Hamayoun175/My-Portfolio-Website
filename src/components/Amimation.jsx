import React, { useEffect } from "react";
import "../styles/Animation.css";
import image1 from "../assets/boy.png";
import image2 from "../assets/112.png";


const kiplingPoem = `
<p className = "text-holder">
Talha <span>keep</span> your head when all about you Are <span>losing</span> theirs and <span>blaming</span>
Talha <span>keep</span> your head when all about you Are <span>losing</span> theirs and <span>blaming</span>
Talha <span>keep</span> your head when all about you Are <span>losing</span> theirs and <span>blaming</span>
Talha <span>keep</span> your head when all about you Are <span>losing</span> theirs and <span>blaming</span>
Talha <span>keep</span> your head when all about you Are <span>losing</span> theirs and <span>blaming</span>
Talha <span>keep</span> your head when all about you Are <span>losing</span> theirs and <span>blaming</span>
</p>
`;

const Animation = () => {
    useEffect(() => {
        const textDivs = document.querySelectorAll(".text");
        textDivs.forEach((div) => {
            div.innerHTML = kiplingPoem;
        });

        const adjustContentSize = () => {
            const contentDiv = document.querySelector(".content");
            if (contentDiv) {
                contentDiv.style.transform = ``;
            }
        };

        window.addEventListener("resize", adjustContentSize);
        adjustContentSize();

        return () => {
            window.removeEventListener("resize", adjustContentSize);
        };
    }, []);

    return (
        <div className="container-fluid p-0">
            <div className="content">
                <div className="container-full">
                    <div className="animated hue"></div>
                    <img
                        className="backgroundImage"
                        src= {image2}
                        alt="Background"
                    />
                    <img
                        className="boyImage"
                        src= {image1}
                        alt="Boy"
                    />
                    <div className="container">
                        <div className="cube">
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                            <div className="face left text"></div>
                            <div className="face right text"></div>
                            <div className="face front"></div>
                            <div className="face back text"></div>
                        </div>
                    </div>
                    <div className="container-reflect">
                        <div className="cube">
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                            <div className="face left text"></div>
                            <div className="face right text"></div>
                            <div className="face front"></div>
                            <div className="face back text"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animation;


import React from "react";
import { useState } from "react";

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    })

    const [btntext, setbtnText] = useState("Enable Dark Mode")
    const toggleDarkMode = () => {
        if (myStyle.color === 'white') {
            setmyStyle({
                color: "black",
                backgroundColor: "white",
            })
            
            setbtnText('Enable Dark Mode')
        } else {
            setmyStyle({
                color: "white",
                backgroundColor: "black",
            })
            setbtnText('Enable Light Mode')
        }
    }
    return (
        <div className="container" style={myStyle}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={myStyle}
                        >
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                        style={myStyle}
                    >
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze you text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={myStyle}
                        >
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                        style={myStyle}
                    >
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.
                            TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/character limit. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={myStyle}
                        >
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                        style={myStyle}
                    >
                        <div className="accordion-body">
                            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count
                            characters in facebook, blog, books, excel document, pdf document, essays, etc. 
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <button type="button" className="btn btn-primary my-2" onClick={toggleDarkMode}>
                        {btntext}
                    </button>
                </div>
            </div>
        </div>
    );
}

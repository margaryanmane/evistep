import React from "react";
import "./InfoSection.css";

function ReportSection({ imageName, textData, className }) {
    const imageSource = `/images/${imageName}.png`
    return (
        <div className={className}>
            <div>
                <img src={imageSource} alt="info" ></img>
            </div>
            <div>
                <h3>{textData.header}</h3>
                {textData.text.map(item => {
                    return <p key={item}>{item}</p>
                })}
            </div>
        </div>
    )
}

export default ReportSection;
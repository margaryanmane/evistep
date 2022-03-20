import React from "react";
import "./style.css";

function FeaturesSection() {

    return (
        <div className="features">
            <h2>Features</h2>
            <p className="features-text">Get The Most Out of Your Work</p>
            <div className="features-info">
                <div>
                    <img src="/images/Mask-Group_1.svg" alt="icon"></img>
                    <h4>Invoice Generating</h4>
                    <p>Track billable time and instantly generate the amount to be paid in a form of invoice to send to your clients.</p>
                </div>
                <div>
                    <img src="/images/Mask-Group_3.svg" alt="icon"></img>
                    <h4>Invoice Generating</h4>
                    <p>Track billable time and instantly generate the amount to be paid in a form of invoice to send to your clients.</p>
                </div>
                <div>
                    <img src="/images/Mask-Group_2.svg" alt="icon"></img>
                    <h4>Invoice Generating</h4>
                    <p>Track billable time and instantly generate the amount to be paid in a form of invoice to send to your clients.</p>
                </div>
            </div>
            <span>More Features</span>
        </div>
    )
}

export default FeaturesSection;
import React from "react";
import "./style.css";

function SocialIcons() {
    return (
        <div className="footer-links">
            <div className="footer-logo">
                <img src="/images/logo.svg" alt="Youtube Link"></img>
                <span>2021</span>
            </div>
            <div className="links">
                <img src="/images/links/you.svg" alt="Youtube Link"></img>
                <img src="/images/links/fb.svg" alt="Facebook Link"></img>
                <img src="/images/links/lin.svg" alt="Linkedin Link"></img>
                <img src="/images/links/twit.svg" alt="Twitter Link"></img>
            </div>
        </div >
    )
}

export default SocialIcons;
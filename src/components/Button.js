import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export const Button = ({ btnName }) => {
    return (
        <Link to="/get-start" className="btn-mobile">
            <button className={btnName}>Get Started</button>
        </Link>
    )
}

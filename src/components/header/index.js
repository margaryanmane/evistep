import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import './style.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 925) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    window.addEventListener("resize", showButton)
    return (<>
        <nav className="navbar" >
            <div className="navbar-container" >
                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    <img src="/images/logo.svg" alt="logo" className="logo" />
                </Link>
                <div className="menu-icon" onClick={handleClick} >
                    <span >
                        {click ? < FaTimes className="fa-times" /> : < FaBars className="fa-bars" />}
                    </span>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"} >
                    <li className="nav-item" >
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link
                            to="/features"
                            className="nav-links"
                            onClick={closeMenu}
                        >
                            Features
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link
                            to="/time-tracking"
                            className="nav-links"
                            onClick={closeMenu}
                        >
                            Time Tracking
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link
                            to="/price"
                            className="nav-links"
                            onClick={closeMenu}
                        >
                            Price
                        </Link>
                    </li>

                    <li className="nav-item" >
                        <Link
                            to="/download"
                            className="nav-links"
                            onClick={closeMenu}
                        >
                            Download
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link
                            to="/log-in"
                            className="nav-links"
                            onClick={closeMenu}
                        >
                            Log in
                        </Link>
                    </li>
                </ul>
                {button && < Button btnName={"btn"} />}
            </div>
        </nav>
    </>
    )
}

export default Navbar;
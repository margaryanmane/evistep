import { Button } from "../Button";
import React from "react";
import "./style.css";

function TimeTrackerSection() {
    return (
        <div className="time-tracker">
            <h2>Track Billable Hours with WebWork Time Tracker</h2>
            <div className="">
                <form>
                    <label>
                        <input type="email" name="name" placeholder="Your e-mail adress" />
                    </label>
                    <Button btnName={"btns"} className="tracker-btn">
                        Start 7 Days Free Trial
                    </Button>
                </form>
            </div>
            <p>Use now, pay in 30 days. No credit card required</p>
        </div>
    )
}

export default TimeTrackerSection;
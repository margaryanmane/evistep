import React from "react";
import { Button } from "../Button";
import "./style.css";

function HomeSection() {
    return (
        <div className="home-container">
            <img src="/images/intersect.png" alt="intersect" className="intersect"></img>
            <div className="name-img">
                <img src="/images/Mask_Group.svg" alt="mask-group" className="mask-group-img"></img>
                <h1 className="mask-group-text">Billable Hours</h1>
            </div>
            {/* <div className="home-content"> */}
                <p className="report-info">Set an hourly rate to your contracts to mark them as billable. Get amount reports and generate invoices to get paid.</p>
                <Button btnName={"btns"}>
                    GET STARTED
                </Button>
                <p className="pay-info">Use now, pay in 30 days. No credit card required</p>
                <img src="/images/table.png" alt="info-table" className="info-table"></img>
            {/* </div> */}
        </div>
    )
}

export default HomeSection;
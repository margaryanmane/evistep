import React from "react";
import './style.css';
import { Collapse } from "antd";
const { Panel } = Collapse;


function FAQSection() {
    return (
        <div className="faqs-section">
            <h2>FAQs</h2>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="Can I choose the currency for the generated amount?" key="1">
                    <p>Yes, if you are the Owner of the workspace you can choose your preferred currency from the drop-down list of profile settings.</p>
                </Panel>
                <Panel header="Where can I view the amount reports?" key="2">
                    <p>You can find the amount reports on the timesheet reports page. You can view them both on hours and amounts.</p>
                </Panel>
                <Panel header="How can I set an hourly rate?" key="3">
                    <p>You can go to members page from your dashboard, select your preferred contract and put an hourly rate for a certain team member.</p>
                </Panel>
                <Panel header="Who can set an hourly rate?" key="4">
                    <p>The owner and also the executive manager if the owner gives permission to him/her.</p>
                </Panel>
            </Collapse>
        </div>
    )
}

export default FAQSection;
import React from 'react';
import InfoSection from '../components/InfoSection';

const reportData = {
    header: "Permissions to Financial Information",
    text: [
        "The owner is eligible to give visibility of the contract's rate to certain team members. You can set up the rate visibility from the member’s list.",
        "Setting “Show hourly rate” will mean the member is able to see all financial information related to his/her contract and role permission.",
        "If a member has no permission to financial information,  he/she cannot view any kind of financial information, as well as is not able to generate invoices."
    ]
};

function FinInfo() {
    return (
        <>
            <InfoSection
                imageName={"fin_info"}
                textData={reportData}
                className={"info-container fin"}
            />
        </>
    );
}

export default FinInfo;
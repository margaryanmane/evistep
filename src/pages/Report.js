import React from 'react';
import InfoSection from '../components/InfoSection';

const reportData = {
    header: "Amount Reports",
    text: [
        "If you are working on an hourly rate, it will be a good idea to make your contracts billable  by adding an hourly rate in the contract's settings.",
        "By doing so your tracked time will be converted into an amount and you will be able to see the reports both in hours and amounts. Amount reports show the billed amount of each member by day, week or month."
    ]
};

function Report() {
    return (
        <>
            <InfoSection
                imageName={"report"}
                textData={reportData}
                className={"info-container report"}
            />
        </>
    );
}

export default Report;
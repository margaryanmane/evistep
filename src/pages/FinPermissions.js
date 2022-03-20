import React from 'react';
import FinPermissionsSection from '../components/FinPermissionsSection';

function FinPermissions() {
    const permissionData = {
        imageName: "man.svg",
        header: {
            "Owner": "#8276FF",
            "Executive Manager": "#FFB546",
            "Project Manager": "#6385FD",
            "Employee": "#33DBA8",
            "Client": "#FD779F"
        },
        p: "Owner is eligible to set up the access of financial information on a workspace level."
    }
    return (
        <>
            <FinPermissionsSection permissionData={permissionData} />
        </>
    );
}

export default FinPermissions;
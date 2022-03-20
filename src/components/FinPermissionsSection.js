import React from "react";
import "./FinPermissionsSection.css";

function FinPermissionsSection({ permissionData }) {

    const imageSource = `/images/${permissionData.imageName}`
    const permData = Object.keys(permissionData.header)
    return (
        <div className="fin-permission">
            <p className="permission-text">Workspace Permissions</p>
            <h2 className="permission-header">Financial Permissions for Member Types</h2>
            <div className="img-text">
                <div className="perm-info">
                    {permData.map((item, key) => {
                        return <div
                            key={key}
                            className="verticalLine"
                            style={{
                                borderLeft: `thick solid ${permissionData.header[item]}`,
                            }}
                        >
                            <img src={imageSource} alt="man" className="man"></img>
                            <span>{item}</span>
                        </div>
                    })}
                </div>
                <div className="perm-img">
                    <img src="/images/fin-permissions.png" alt="fin-permissions" className="fin-perm-img"></img>
                </div>
            </div>
        </div>
    )
}

export default FinPermissionsSection;
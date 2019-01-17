import React from "react";
import dash from '../assets/icons/dash.svg';
import orgs from '../assets/icons/orgs.svg';
import patient from '../assets/icons/patient.svg';
import staff from '../assets/icons/staff.svg';
import setting from '../assets/icons/setting.svg';
import "./DashboardSideMenu.css";

export class DashboardSideMenu extends React.Component {
    render() {
        return (
            <div className="sideMenu">
                <ul>
                    <li className="activeMenu">
                        <p>
                            <img src={dash} alt="dashboard"/>
                            Dashboard
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src={orgs} alt="orgs"/>
                            Organisations
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src={staff} alt="staff"/>
                            Staff
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src={patient} alt="patient"/>
                            Patients
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src={setting} alt="setting"/>
                            Settings
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}
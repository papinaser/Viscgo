import React from "react";
import home from '../assets/icons/home.svg';
import dash from '../assets/icons/dash.svg';
import orgs from '../assets/icons/orgs.svg';
import patient from '../assets/icons/patient.svg';
import staff from '../assets/icons/staff.svg';
import setting from '../assets/icons/setting.svg';

import "./DashboardContent.css";

export class DashboardContent extends React.Component {
    render() {
        return (
            <div className="dashboardContent">
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
                <div className="pageContent">
                    <p className="pageTitle">
                        Dashbard
                    </p>
                    <p className="currentPage"><img src={home} alt="home"/>• Dashboard</p>
                    <ul className="dashboardBoxes">
                        <li>
                            <h2>123</h2>
                            <hr/>
                            <p>Organisations</p>
                        </li>
                        <li>
                            <h2>20</h2>
                            <hr/>
                            <p>Staff</p>
                        </li>
                        <li>
                            <h2>50</h2>
                            <hr/>
                            <p>Patients</p>
                        </li>
                        <li>
                            <h2>6</h2>
                            <hr/>
                            <p>Data Logs</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DashboardContent;
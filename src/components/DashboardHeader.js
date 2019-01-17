import React from "react";
import logo from '../assets/logo.svg';
import "./DashboardHeader.css";

export class DashboardHeader extends React.Component {
    render() {
        return (
            <header className="dashboardHeader">
                <div className="logo">
                    <img src={logo} alt={"logo"}/>
                </div>
                <div className="profile">
                    <div id="time">April 12, 2019</div>
                    <div id="user">ADMIN Mike Smith</div>
                </div>
            </header>
        );
    }
}

export default DashboardHeader;
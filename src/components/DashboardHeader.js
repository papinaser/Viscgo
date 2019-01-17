import React from "react";
import logoIcon from '../assets/logo.svg';
import "./DashboardHeader.css";
import userIcon from "../assets/icons/user.svg";

export class DashboardHeader extends React.Component {
    render() {
        return (
            <header className="dashboardHeader">
                <div className="logo">
                    <img src={logoIcon} alt={"logo"}/>
                </div>
                <div className="profile">
                    <ul>
                        <li key="time">April 12, 2019</li>
                        <li key="icon"><img src={userIcon} alt="user"/></li>
                        <li key="user">
                            <p>ADMIN</p>
                            <p>Mike Smith</p>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
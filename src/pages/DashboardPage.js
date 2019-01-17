import React from "react";
import {DashboardHeader} from "../components/DashboardHeader";
import {DashboardContent} from "../components/DashboardContent";
import "./DashboardPage.css"

export class DashboardPage extends React.Component {
    render() {
        return (
            <div className="dashboardPage">
                <DashboardHeader/>
                <DashboardContent/>
            </div>
        )
    }
}

export default DashboardPage;
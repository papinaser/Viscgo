import React from "react";
import home from '../assets/icons/home.svg';

import "./DashboardContent.css";
import {DashboardSideMenu} from "./DashboardSideMenu";
import {DashboardKPIS} from "./DashboardKPIS";
import * as KPIS from "../models/dashboard";

export class DashboardContent extends React.Component {
    render() {
        return (
            <div className="dashboardContent">
                <DashboardSideMenu/>
                <div className="pageContent">
                    <p className="pageTitle">
                        Dashbard
                    </p>
                    <p className="currentPage"><img src={home} alt="home"/>• Dashboard</p>
                    <DashboardKPIS kpis={KPIS}/>

                </div>
            </div>
        )
    }
}

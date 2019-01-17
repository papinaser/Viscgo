import React from "react";
import "./DashboardKPIS.css";

export class DashboardKPIS extends React.Component {
    render() {
        return (
            <ul className="dashboardKPIS">
                {this.props.kpis.default.map(kpi =>
                    <li>
                        <h2>{kpi.value}</h2>
                        <hr/>
                        <p>{kpi.catName}</p>
                    </li>
                )}
            </ul>
        );
    }
}

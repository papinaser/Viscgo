import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import ResetPage from "./pages/ResetPage";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={LoginPage}/>
                    <Route path="/reset" exact component={ResetPage}/>
                    <Route path="/dashboard/" component={DashboardPage}/>
                </div>
            </Router>
        );
    }
}

export default App;

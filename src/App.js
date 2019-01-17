import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import ResetPage from "./pages/ResetPage";
import "./App.css";

class App extends Component {
    render() {
        const About = () => <h2>About</h2>;
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={LoginPage}/>
                    <Route path="/reset" exact component={ResetPage}/>
                    <Route path="/about/" component={About}/>
                </div>
            </Router>
        );
    }
}

export default App;

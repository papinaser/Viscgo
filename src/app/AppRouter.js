import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";

const About = () => <h2>About</h2>;

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={LoginPage}/>
            <Route path="/about/" component={About}/>
        </div>
    </Router>
);

export default AppRouter;
import React from "react";
import "./LoginContent.css"
import {Link, Redirect} from "react-router-dom";

export class LoginContent extends React.Component {
    handleSubmit = () => {
        this.setState(() => ({
            isValidUser: true
        }));
    };

    constructor(props) {
        super(props);
        this.state = {
            isValidUser: false,
        };
    }

    render() {
        if (this.state.isValidUser) {
            return <Redirect to={"/dashboard"}/>
        }
        return (
            <article className="dialogContent">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="inputes">
                        <input className="textBox userName" name="username" type={"text"} placeholder="Username"/>
                        <input className="textBox password" name="password" type={"password"} placeholder="Password"/>
                    </fieldset>
                    <fieldset>
                        <button type={"submmit"} className="dialogButton loginBtn">Login</button>
                        <Link to="/reset" className="forgotMessage">Did you forget your password?</Link>
                    </fieldset>
                </form>
            </article>
        )
    }
}

export default LoginContent;
import React from "react";
import "./ResetContent.css"
import {Redirect} from "react-router-dom";

export class ResetContent extends React.Component {
    handleSubmit = () => {
        this.setState(() => ({
            isEmailValid: true
        }));
    };

    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
        };
    }

    render() {
        if (this.state.isEmailValid) {
            return <Redirect to={"/"}/>
        }
        return (

            <article className="dialogContent">
                <form onSubmit={this.handleSubmit}>
                    <h3>Reset Password
                    </h3>
                    <p>
                        Enter the email address associated with your account, and we’ll email you a link to reset your
                        password
                    </p>
                    <fieldset>
                        <input className="textBox email" name="email" type={"email"} placeholder="Email Address"/>
                        <button type={"submmit"} className="dialogButton resetBtn">Reset Password</button>
                    </fieldset>
                </form>
            </article>
        );
    }
}